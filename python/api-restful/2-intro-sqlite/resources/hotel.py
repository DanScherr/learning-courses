# Resource -> para criação de recursos na api
# reqparse -> para receber os elementos da requisição e estruturar para formato python
from flask_restful import Resource, reqparse
# importar modelo de hotel
from models.hotel import HotelModel

# ---------------------- aqui seria um banco de dados ----------------
hoteis = [
    {
        'hotel_id': 'alpha',
        'nome': 'Alpha Hotel',
        'estrelas': 4.3,
        'diaria': 420.3,
        'cidade': 'Rio de Janeiro'
    },
    {
        'hotel_id': 'betta',
        'nome': 'Betta Hotel',
        'estrelas': 3.3,
        'diaria': 220.5,
        'cidade': 'São Paulo'
    },
    {
        'hotel_id': 'sigma',
        'nome': 'Sigma Hotel',
        'estrelas': 4.7,
        'diaria': 480.9,
        'cidade': 'Ribeirão Preto'
    }
]
# ----------------------------------------------------------------


# ------------- Primeiro nível ------------
# Classe que herda a classe Resource para criação de um recurso para ser adicionada na API
class Hoteis(Resource):
    def get(self):
        # Estrutura de dicionário. Porém a biblioteca flask_restful transforma para json na requisição do site
        return {'hoteis': hoteis}


# ------------- Segundo nível ------------
class Hotel(Resource):
    # definindo objeto construtor de tipo argumentos parseados
    argumentos = reqparse.RequestParser()
    # construindo or argumentos do objeto que só irá aceitar os argumentos definidos neste construtor com o add_argument
    argumentos.add_argument('nome')
    argumentos.add_argument('estrelas')
    argumentos.add_argument('diaria')
    argumentos.add_argument('cidade')

    def find_hotel(self, hotel_id):
        for hotel in hoteis:
            if hotel['hotel_id'] == hotel_id:
                return hotel
        return None

    def get(self, hotel_id):
        hotel = self.find_hotel(hotel_id)
        if hotel: # se não none
            return hotel
        return {'message': 'Hotel not found.'}, 404 # not found

    def post(self, hotel_id):
        # dados será um dicionário com chave: valor de todos os arguemntos passados
        dados = Hotel.argumentos.parse_args()
        # cria novo hotel com parametros do post, no PUT tem uma versão melhorada de novo_hotel
        novo_hotel = {
            'hotel_id' : hotel_id, # passado na url
            'nome' : dados['nome'],
            'estrelas' : dados['estrelas'],
            'diaria' : dados['diaria'],
            'cidade' : dados['cidade']
        }
        # Adiciona novo hotel a lista de hoteis
        hoteis.append(novo_hotel)
        # Retorna hotel criado
        return novo_hotel, 200 # sucesso criação hotel

    def put(self, hotel_id):
        dados = Hotel.argumentos.parse_args()
        # # cria novo hotel com parametros do post
        # novo_hotel = { 'hotel_id' : hotel_id, **dados }
        novo_hotel_objeto = HotelModel(hotel_id, **dados)
        # como não podemos retornar um objeto, precisamos transf para json
        novo_hotel = novo_hotel_objeto.json()
        # busca hotel
        hotel = self.find_hotel(hotel_id)
        # se não none
        if hotel:
            hotel.update(novo_hotel)
            return novo_hotel, 200
        # caso none, cria hotel
        hoteis.append(novo_hotel)
        return novo_hotel, 201 # created

    
    def delete(self, hotel_id):
        # informar o python que hoteis é uma variavel global
        global hoteis
        hoteis = [hotel for hotel in hoteis if hotel['hotel_id'] != hotel_id]
        return {'message': 'Hotel deleted.'}
