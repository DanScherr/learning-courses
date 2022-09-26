# Resource -> para criação de recursos na api
# reqparse -> para receber os elementos da requisição e estruturar para formato python
from flask_restful import Resource, reqparse
# 2. importar modelo de hotel
from models.usuario import UserModel


# ============ Classe para instancia user ===============
class User(Resource):
    # /usuarios/{user_id}

    def get(self, user_id):
        # 2. se o hotel já foi criado antes
        user_encontrado = UserModel.find_user(user_id)
        if user_encontrado: # se não none
            return user_encontrado.json()
        return {'message': 'User not found.'}, 404 # not found

    def delete(self, user_id):
        # 2. procurar se existe o hotel que deseja excluir
        user_encontrado = UserModel.find_user(user_id)
        # 2. se hotel encontrado,
        if user_encontrado:
            # 2. deleta hotel
            try:
                user_encontrado.delete_user()
                return {'message': 'User deleted.'}, 200
            except:
                return {'message:' 'An internal error ocurred trying to delete user.'}, 500 # internal server error
        return {'message': 'User not found'}, 404


# ============ Classe para Coleção cadastro_usuario ===============
# é um recurso diferente de User, porém, o método post salvo na tabela usuarios
class UserRegister(Resource):
    # /cadastro
    
    def post(self):
        atributos = reqparse.RequestParser()
        atributos.add_argument('login', type=str, required=True, help="The field 'login' cannot be left blank.")
        atributos.add_argument('senha', type=str, required=True, help="The field 'senha' cannot be left blank.")
        dados = atributos.parse_args()

        # 3. vai procurar pelo login não pelo ID
        if UserModel.find_user_by_login(dados['login']):
            return {"message": f"The login {dados['login']} already exists"}, 400
        # 3. caso não ache um usuario ele irá instanciar um novo usario de classe UserModel
        user = UserModel(**dados)
        # 3. e em seguida irá salva-lo
        user.save_user()
        return {"message": "User created successfully!!"}, 201
