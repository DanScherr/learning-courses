# ========================================= imports =========================================
# ----- criação externa -----
from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt_extended import JWTManager
# ----- criação interna -----
from resources.hotel import Hoteis, Hotel
from resources.sites import Site, Sites
from resources.usuario import User, UserConfirm, UserRegister, UserLogin, UserLogout
from blacklist import BLACKLIST


# ============================ configurações flask, rest-api e jwt ==========================
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'DontTellAnyone'
app.config["JWT_ALGORITHM"] = "HS256"
app.config['JWT_BLACKLIST_ENABLED'] = True
api = Api(app)
jwt = JWTManager(app)


# ==================== criando decoradores de contexto (estado) da aplicação =================
@app.before_first_request
def cria_banco():
    banco.create_all()

@jwt.token_in_blocklist_loader
def verifica_blacklist(self, token):
    return token['jti'] in BLACKLIST

@jwt.revoked_token_loader
def token_de_acesso_invalidado(jwt_header, jwt_payload):
    return jsonify({"message": "You have been logged out."}), 401


# ================== adicionando recursos (endpoints) à nossa api-restful ====================
api.add_resource(Hoteis, '/hoteis')
api.add_resource(Hotel, '/hoteis/<string:hotel_id>')
api.add_resource(User, '/usuarios/<int:user_id>')
api.add_resource(UserRegister, '/cadastro_usuario')
api.add_resource(UserLogin, '/login')
api.add_resource(UserLogout, '/logout')
api.add_resource(Sites, '/sites')
api.add_resource(Site, '/sites/<string:url>')
api.add_resource(UserConfirm, '/confirmacao/<int:user_id>')


# ================ configuracoes para quando o arquivo é executado como main =================
if __name__ == '__main__':
    from sql_alchemy import banco
    banco.init_app(app)
    app.run(host="0.0.0.0", debug=True, port="5000")
