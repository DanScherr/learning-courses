from importlib.resources import path
from flask_restful import Resource, reqparse
from models.hotel import HotelModel
from flask_jwt_extended import jwt_required
import sqlite3
from resources.filtros import normalize_path_params, consulta_com_cidade, consulta_sem_cidade
from models.site import SiteModel

path_params = reqparse.RequestParser()
path_params.add_argument('cidade', type=str, location='values')
path_params.add_argument('estrelas_min', type=float, location='values')
path_params.add_argument('estrelas_max', type=float, location='values')
path_params.add_argument('diaria_min', type=float, location='values')
path_params.add_argument('diaria_max', type=float, location='values')
path_params.add_argument('limit', type=float, location='values')
path_params.add_argument('offset', type=float, location='values')



class Hoteis(Resource):


    def get(self):
        connection = sqlite3.connect('banco.db')
        cursor = connection.cursor()
        dados = path_params.parse_args()
        dados_validos = {chave:dados[chave] for chave in dados if dados[chave] is not None}
        parametros = normalize_path_params(**dados_validos)

        if not parametros.get('cidade'):
            tupla_parametros = tuple([parametros[chave] for chave in parametros])
            resultado = cursor.execute(consulta_sem_cidade, tupla_parametros)
        else:
            tupla_parametros = tuple([parametros[chave] for chave in parametros])
            resultado = cursor.execute(consulta_com_cidade, tupla_parametros)

        hoteis = []
        for linha in resultado:
            hoteis.append(
                {
                    'hotel_id': linha[0],
                    'nome': linha[1],
                    'estrelas': linha[2],
                    'diaria': linha[3],
                    'cidade': linha[4],
                    'site_id': linha[5]
                }
            )
        return {'hoteis': hoteis}



class Hotel(Resource):


    argumentos = reqparse.RequestParser()
    
    argumentos.add_argument('nome', type=str, required=True, help="The field 'nome' cannot be left blank")
    argumentos.add_argument('estrelas', type=float, required=True, help="The field 'estrelas' cannot be left blank")
    argumentos.add_argument('diaria', type=float, required=False, help="The field 'diaria' cannot be left blank")
    argumentos.add_argument('cidade', type=str, required=False, help="The field 'cidade' cannot be left blank")
    argumentos.add_argument('site_id', type=int, required=True, help='Every hotel has to be linked to a site.')

    def get(self, hotel_id):
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado:
            return hotel_encontrado.json()
        return {'message': 'Hotel not found.'}, 404

    @jwt_required()
    def post(self, hotel_id):
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado:
            return {'message': f"Hotel id '{hotel_id}' already exists."}, 400
        dados = Hotel.argumentos.parse_args()
        # 1. before creating and saving hotel we need to check if site_id exists
        site_id = dados['site_id']
        if not SiteModel.find_site_by_id(site_id):
            return {'message': 'The hotel must be associated to a valid site id.'}, 400
        # 1. após checagem podemos criar um novo hotel com os dados recebidos e salvá-lo
        # no nosso banco de dados
        novo_hotel = HotelModel(hotel_id, **dados) 
        try:
            novo_hotel.save_hotel()
            return novo_hotel.json(), 200
        except:
            return {'message:' 'An internal error ocurred trying to save hotel.'}, 500
        

    @jwt_required()
    def put(self, hotel_id):
        dados = Hotel.argumentos.parse_args()
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado:
            hotel_encontrado.update_hotel(**dados)
            try:
                hotel_encontrado.save_hotel()
            except:
                return {'message:' 'An internal error ocurred trying to save hotel.'}, 500
            return hotel_encontrado.json(), 200
        novo_hotel = HotelModel(hotel_id, **dados)
        novo_hotel.save_hotel()
        return novo_hotel.json(), 201

    @jwt_required()
    def delete(self, hotel_id):
        hotel_encontrado = HotelModel.find_hotel(hotel_id)
        if hotel_encontrado:
            try:
                hotel_encontrado.delete_hotel()
                return {'message': 'Hotel deleted.'}, 200
            except:
                return {'message:' 'An internal error ocurred trying to delete hotel.'}, 500
        return {'message': 'Hotel not found'}, 404
