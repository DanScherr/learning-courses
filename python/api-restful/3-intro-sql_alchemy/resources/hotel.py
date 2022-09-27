# Resource -> para criação de recursos na api
# reqparse -> para receber os elementos da requisição e estruturar para formato python
from importlib.resources import path
from flask_restful import Resource, reqparse
# 2. importar modelo de hotel
from models.hotel import HotelModel
# 3. importar jwt_required para definir quais metodos precisam do login do usuario
from flask_jwt_extended import jwt_required # feito com decorador
# 4. importar sqlite3 para fazermos consultas mais complexas
import sqlite3
# 4. importar função que normaliza e padroniza parametros de filtro da url
from resources.filtros import normalize_path_params, consulta_com_cidade, consulta_sem_cidade


# 4. queremos ser capazes de usar o path:   /hoteis?cidade=Rio de Janeiro&estrelas_min=4&diaria_max=400
# para a requisicao do usuario
path_params = reqparse.RequestParser()
path_params.add_argument('cidade', type=str, location='values')
path_params.add_argument('estrelas_min', type=float, location='values')
path_params.add_argument('estrelas_max', type=float, location='values')
path_params.add_argument('diaria_min', type=float, location='values')
path_params.add_argument('diaria_max', type=float, location='values')
path_params.add_argument('limit', type=float, location='values')
path_params.add_argument('offset', type=float, location='values')


# =============== Primeiro nível =========================================================================

# 2. Classe que herda a classe Resource para criação de um recurso para ser adicionada na API
class Hoteis(Resource):
    def get(self):
        # -------- 4. realizando conexao com banco -------------------------------------------------------
        connection = sqlite3.connect('banco.db')
        cursor = connection.cursor()
        # -------- 4. estabelecendo, limpando e padronizando parametros recebidos pelo usuario -----------
        # 4. recebendo todos parametros do usuario e parseando
        dados = path_params.parse_args()
        print(f'parametos do header: {dados}\n')
        # 4. é necessário realizar limpeza prévia dos dados, por que se não, valores none podem influenciar nos filtros
        # percorre dados e, caso não nulo, cria dicionario com dados validos
        dados_validos = {chave:dados[chave] for chave in dados if dados[chave] is not None}
        print(f'dados validos: {dados_validos}\n')
        # 4. passa dicionario com valores validos para função que setta com/sem default pré-estabelecidos
        parametros = normalize_path_params(**dados_validos)
        print(f'parametros normalizados: {parametros}\n')
        # -------- 4. realizando query, com/sem cidade ---------------------------------------------------
        # 4. com o get, recebemos none caso o parametro não existir -> mais seguro
        if not parametros.get('cidade'):
            # 4. .execute recebe um tupla, e em parametros temos um dicionario, portanto:
            # receberemos uma tupla na ordem que determinamos em normalize_path_params
            tupla_parametros = tuple([parametros[chave] for chave in parametros])
            resultado = cursor.execute(consulta_sem_cidade, tupla_parametros)
        else:
            tupla_parametros = tuple([parametros[chave] for chave in parametros])
            resultado = cursor.execute(consulta_com_cidade, tupla_parametros)
        # -------- 4. queremos colocar o resultado numa lista de dicionários com a pesquisa dos parâmetros passados
        hoteis = []
        for linha in resultado:
            hoteis.append(
                {
                    'hotel_id': linha[0],
                    'nome': linha[1],
                    'estrelas': linha[2],
                    'diaria': linha[3],
                    'cidade': linha[4]
                }
            )
        # -------- 4. retorna um dicionário com lista de dicionários de hotéis -------------------------
        return {'hoteis': hoteis}


# =============== Segundo nível ========================================================================

class Hotel(Resource):
    # 3. só para o POST
    # definindo objeto construtor de tipo argumentos parseados
    argumentos = reqparse.RequestParser()
    # construindo or argumentos do objeto que só irá aceitar os argumentos definidos neste construtor com o add_argument
    argumentos.add_argument('nome', type=str, required=True, help="The field 'nome' cannot be left blank")
    argumentos.add_argument('estrelas', type=float, required=True, help="The field 'estrelas' cannot be left blank")
    argumentos.add_argument('diaria', type=float, required=False, help="The field 'diaria' cannot be left blank")
    argumentos.add_argument('cidade', type=str, required=False, help="The field 'cidade' cannot be left blank")

    # 3. para acessar hotel, não precisa estar logada
    def get(self, hotel_id):
        # 2. se o hotel já foi criado antes
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado: # se não none
            return hotel_encontrado.json()
        return {'message': 'Hotel not found.'}, 404 # not found

    @jwt_required()
    # 3. precisa do token de login para acesso
    def post(self, hotel_id):
        # 2. se o hotel já foi criado antes
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado:
            return {'message': f"Hotel id '{hotel_id}' already exists."}, 400 # bad request
        # 2. caso contrário
        # dados será um dicionário com chave: valor de todos os arguemntos passados
        dados = Hotel.argumentos.parse_args()
        # cria novo hotel com parametros do post
        novo_hotel = HotelModel(hotel_id, **dados)
        # Adiciona novo hotel a lista de hoteis
        try:
            novo_hotel.save_hotel()
        except:
            return {'message:' 'An internal error ocurred trying to save hotel.'}, 500 # internal server error
        # Retorna hotel criado
        return novo_hotel.json(), 200 # sucesso criação hotel

    @jwt_required()
    # 3. precisa do token de login para acesso
    def put(self, hotel_id):
        # busca argumentos do path e cria novo dicionario
        dados = Hotel.argumentos.parse_args()
        # 2. busca hotel entre os objetos da classe HotelModel
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        # se não for none
        if hotel_encontrado:
            hotel_encontrado.update_hotel(**dados)
            try:
                hotel_encontrado.save_hotel()
            except:
                return {'message:' 'An internal error ocurred trying to save hotel.'}, 500 # internal server error
            return hotel_encontrado.json(), 200
        # 2. caso o hotel não tenha sido encontrado, criará um novo
        novo_hotel = HotelModel(hotel_id, **dados)
        # 2. caso none, salva hotel
        novo_hotel.save_hotel()
        return novo_hotel.json(), 201 # created

    @jwt_required()
    # 3. precisa do token de login para acesso
    def delete(self, hotel_id):
        # 2. procurar se existe o hotel que deseja excluir
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        # 2. se hotel encontrado,
        if hotel_encontrado:
            # 2. deleta hotel
            try:
                hotel_encontrado.delete_hotel()
                return {'message': 'Hotel deleted.'}, 200
            except:
                return {'message:' 'An internal error ocurred trying to delete hotel.'}, 500 # internal server error
        return {'message': 'Hotel not found'}, 404
