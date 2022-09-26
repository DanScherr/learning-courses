# Resource -> para criação de recursos na api
# reqparse -> para receber os elementos da requisição e estruturar para formato python
from flask_restful import Resource, reqparse
# 2. importar modelo de hotel
from models.hotel import HotelModel
# 3. importar jwt_required para definir quais metodos precisam do login do usuario
from flask_jwt_extended import jwt_required # feito com decorador

# ------------- Primeiro nível ------------
# 2. Classe que herda a classe Resource para criação de um recurso para ser adicionada na API
class Hoteis(Resource):
    def get(self):
        # 2. faz o list comprehension (percorre todos os objetos do tipo HotelModel) 
        # pra dar retorno transformando em json
        return {'hoteis': [hotel.json() for hotel in HotelModel.query.all()]}


# ------------- Segundo nível ------------
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
