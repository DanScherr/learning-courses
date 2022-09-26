# Resource -> para criação de recursos na api
# reqparse -> para receber os elementos da requisição e estruturar para formato python
from email import message
from lib2to3.pgen2 import token
from venv import create
from flask_restful import Resource, reqparse
# 2. importar modelo de hotel
from models.usuario import UserModel
# 3. importa JWT para criação e envio de token e checagem do mesmo também
from flask_jwt_extended import create_access_token, jwt_required, get_jwt
# 3. importa classe para tratamento de string na senha do usuario
from werkzeug.security import hmac
# 3. importando blacklist
from blacklist import BLACKLIST

# 3. atributos sendo instanciada como variavel global. para acesso a qualquer classe do arquivo
atributos = reqparse.RequestParser()
atributos.add_argument('login', type=str, required=True, help="The field 'login' cannot be left blank.")
atributos.add_argument('senha', type=str, required=True, help="The field 'senha' cannot be left blank.")


# ============ Classe para instancia user ===============
class User(Resource):
    # /usuarios/{user_id}

    @jwt_required()
    # 3. precisa do token de login para acesso
    def get(self, user_id):
        # 2. se o hotel já foi criado antes
        user_encontrado = UserModel.find_user(user_id)
        if user_encontrado: # se não none
            return user_encontrado.json()
        return {'message': 'User not found.'}, 404 # not found

    @jwt_required()
    # 3. precisa do token de login para acesso
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
        # 3. Importando atributos
        dados = atributos.parse_args()
        # 3. vai procurar pelo login não pelo ID
        if UserModel.find_user_by_login(dados['login']):
            return {"message": f"The login {dados['login']} already exists"}, 400
        # 3. caso não ache um usuario ele irá instanciar um novo usario de classe UserModel
        user = UserModel(**dados)
        # 3. e em seguida irá salva-lo
        user.save_user()
        return {"message": "User created successfully!!"}, 201


class UserLogin(Resource):

    @classmethod
    def post(cls):
        # 3. Importando atributos
        dados = atributos.parse_args()

        # 3. procurando e atribuindo usuario buscado na tentativa de login
        user = UserModel.find_user_by_login(dados['login'])
        # 3. se usuario encontrado e senha (de forma segura) é igual a que o usuario inseriu
        if user and hmac.compare_digest(user.senha, dados['senha']):
            # 3. é criado token de acesso
            token_de_acesso = create_access_token(identity=user.user_id)
            return {"access_token": token_de_acesso}, 200
        return {"message": "The 'username' or 'password' is incorrect."}, 401 # unauthorized


class UserLogout(Resource):

    # 3. quando um usuario faz um post de loggou
    @jwt_required()
    def post(self):
        # 3. pegamos o token identifier (id)
        jwt_id = get_jwt()['jti']
        # 3. adiciona esse id à blacklist (para que não seja possivel acessar mais com esse token)
        BLACKLIST.add(jwt_id)
        print(jwt_id)
        # 3. retorna mensagem
        return {"message": "Logged out successfully!"}, 200
