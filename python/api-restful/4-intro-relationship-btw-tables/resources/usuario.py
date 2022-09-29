from flask_restful import Resource, reqparse
from models.usuario import UserModel
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
from werkzeug.security import hmac
from blacklist import BLACKLIST
# 2.
import traceback


atributos = reqparse.RequestParser()
atributos.add_argument('login', type=str, required=True, help="The field 'login' cannot be left blank.")
# 2. adicionando email aos argumentos, vamos torná-lo requerido no post do user register
# caso contrário, sempre que chamarmos o atributos.parse_args(), teríamos que passar o email
atributos.add_argument('email', type=str)
atributos.add_argument('senha', type=str, required=True, help="The field 'senha' cannot be left blank.")
atributos.add_argument('ativado', type=bool, required=False)



class User(Resource):


    @jwt_required()
    def get(self, user_id):
        user_encontrado = UserModel.find_user(user_id)

        if user_encontrado:
            return user_encontrado.json()

        return {'message': 'User not found.'}, 404

    @jwt_required()
    def delete(self, user_id):
        user_encontrado = UserModel.find_user(user_id)

        if user_encontrado:

            try:
                user_encontrado.delete_user()
                return {'message': 'User deleted.'}, 200
            except:
                return {'message:' 'An internal error ocurred trying to delete user.'}, 500

        return {'message': 'User not found'}, 404


class UserRegister(Resource):
    # /cadastro

    def post(self):
        dados = atributos.parse_args()

        # 2. checando se usuario cadastrou email
        if not dados.get('email') or dados.get('email') is None :
            return {'message': "The field 'email' cannot be left blank."}, 400

        # 2. checando se email já existe
        if UserModel.find_user_by_email(dados['email']):
            return {'message': f"The email '{dados['email']}' already exists."}, 400
        
        if UserModel.find_user_by_login(dados['login']):
            return {"message": f"The login {dados['login']} already exists"}, 400

        user = UserModel(**dados)
        # 2. garantir que antes de cadastrar no banco de dados, iremos settar como false
        user.ativado = False

        try:
            user.save_user()
            # 2. mandando confirmação de email
            user.send_confirmation_email()
        except:
            # 2. se caso nao conseguir salvar, deleta o obj usuario da memoria e da msg de erro
            user.delete_user()
            traceback.print_exc()
            return {'message': 'An internal server error has ocurred.'}, 500
        
        return {"message": "User created successfully!!"}, 201


class UserLogin(Resource):


    @classmethod
    def post(cls):
        dados = atributos.parse_args()
        user = UserModel.find_user_by_login(dados['login'])

        if user and hmac.compare_digest(user.senha, dados['senha']):

            # 2. checando se o usuario está ativo para login
            if user.ativado:
                token_de_acesso = create_access_token(identity=user.user_id)
                return {"access_token": token_de_acesso}, 200
            return {"message": "User not confirmed. Check your e-mail."}, 400

        return {"message": "The 'username' or 'password' is incorrect."}, 401


class UserLogout(Resource):


    @jwt_required()
    def post(self):
        jwt_id = get_jwt()['jti']
        BLACKLIST.add(jwt_id)
        print(jwt_id)
        return {"message": "Logged out successfully!"}, 200


# 2. criar metodo de confirmacao de usuario
class UserConfirm(Resource):
    # url: raiz_do_site/confirmacao/{user_id}
    
    @classmethod
    def get(cls, user_id):
        user = UserModel.find_user(user_id)

        if not user:
            return {"message": f"User id '{user_id}' not found."}, 404

        user.ativado = True
        user.save_user()
        return {"message": f"User id '{user_id}' confirmed successfully."}, 200

