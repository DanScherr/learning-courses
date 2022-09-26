# Resource -> para criação de recursos na api
# reqparse -> para receber os elementos da requisição e estruturar para formato python
from flask_restful import Resource, reqparse
# 2. importar modelo de hotel
from models.usuario import UserModel


# ------------- Segundo nível ------------
class User(Resource):


    def get(self, user_id):
        # 2. se o hotel já foi criado antes
        user_encontrado = UserModel.find_user(user_id)
        if user_encontrado: # se não none
            return user_encontrado.json()
        return {'message': 'Hotel not found.'}, 404 # not found

    def delete(self, user_id):
        # 2. procurar se existe o hotel que deseja excluir
        user_encontrado = UserModel.find_user(user_id)
        # 2. se hotel encontrado,
        if user_encontrado:
            # 2. deleta hotel
            try:
                user_encontrado.delete_user()
                return {'message': 'Hotel deleted.'}, 200
            except:
                return {'message:' 'An internal error ocurred trying to delete hotel.'}, 500 # internal server error
        return {'message': 'Hotel not found'}, 404
