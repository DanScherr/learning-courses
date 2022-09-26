# ----- realizando imports -----
from flask import Flask, jsonify
from flask_restful import Api
from resources.hotel import Hoteis, Hotel
from resources.usuario import User, UserRegister, UserLogin, UserLogout
# 3. Criar gerenciador do nosso token de login de acesso do usuario
from flask_jwt_extended import JWTManager
# 3. importando blacklist criada (blacklist.py)
from blacklist import BLACKLIST

# ----- configuracoes para objeto do tipo Flask -----
app = Flask(__name__)
# 1. configurando o data_base_alchemy do nosso objeto app do tipo Flask para um sqlite (podendo ser também postgre, mysql, etc)
# 1. para o sql_alchemy criar no banco para nós
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
# 1. para não ficar sobrecarrregando nossa aplicacao (rastreamento de modificacoes irá continuar sendo feito pelo alchemy mesmo como false)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# 3. configurando segredo na app para o jwt (so a aplicação tem essa chave)
app.config['JWT_SECRET_KEY'] = 'DontTellAnyone'
# 3. configurando app para ter um HS256 como senha de algoritimo simetrico
app.config["JWT_ALGORITHM"] = "HS256"
# 3. adicionando lista negra para a aplicação para invalidar um ID especifico
app.config['JWT_BLACKLIST_ENABLED'] = True
# ----- configuracoes para objeto do tipo Api -----
# criando variável que irá inicializar aplicação flask
api = Api(app)
# 3. ----- configuracoes para objeto do tipo JWTManager -----
jwt = JWTManager(app)


# ----- decorador que indica o que fazer antes da primeira requisicao ao app -----
# 1. criando decorador
@app.before_first_request
# 1. criando funcao para rodar, caso decorador seja ativado
def cria_banco():
    # 1. antes da primeira requisicao, o banco será criado
    banco.create_all()

# 3. verifica se o id está na blacklist
@jwt.token_in_blocklist_loader
def verifica_blacklist(self, token):
    return token['jti'] in BLACKLIST

# 3. resposta caso o id verificado estiver na blacklist
@jwt.revoked_token_loader
def token_de_acesso_invalidado(jwt_header, jwt_payload):
    return jsonify({"message": "You have been logged out."}), 401 # unauthorized


# ----- código de fato -----
# adding resources to the api (endpoint)
api.add_resource(Hoteis, '/hoteis')
api.add_resource(Hotel, '/hoteis/<string:hotel_id>')
api.add_resource(User, '/usuarios/<int:user_id>')
api.add_resource(UserRegister, '/cadastro_usuario')
api.add_resource(UserLogin, '/login')
api.add_resource(UserLogout,'/logout')


# ----- configuracoes para quando o arquivo é executado como main -----
# if the application is not imported, but it's running by itself
if __name__ == '__main__':
    # 1. estamos importando o objeto banco criado no arquivo sql_alchemy
    from sql_alchemy import banco
    # 1. irá inicializar o banco quando o app for inicializado
    banco.init_app(app)
    # Debug true só enquanto estiver produzindo. Depois, colocar como False
    app.run(debug=True)

