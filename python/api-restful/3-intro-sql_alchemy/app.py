# ----- realizando imports -----
from flask import Flask
from flask_restful import Api
from resources.hotel import Hoteis, Hotel


# ----- configuracoes para objeto do tipo Flask -----
app = Flask(__name__)
# 1. configurando o data_base_alchemy do nosso objeto app do tipo Flask para um sqlite (podendo ser também postgre, mysql, etc)
# 1. para o sql_alchemy criar no banco para nós
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///banco.db'
# 1. para não ficar sobrecarrregando nossa aplicacao (rastreamento de modificacoes irá continuar sendo feito pelo alchemy mesmo como false)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# criando variável que irá inicializar aplicação flask
api = Api(app)


# ----- decorador que indica o que fazer antes da primeira requisicao ao app -----
# 1. criando decorador
@app.before_first_request
# 1. criando funcao para rodar, caso decorador seja ativado
def cria_banco():
    # 1. antes da primeira requisicao, o banco será criado
    banco.create_all()


# ----- código de fato -----
# adding a resource to the api
api.add_resource(Hoteis, '/hoteis')
api.add_resource(Hotel, '/hoteis/<string:hotel_id>')


# ----- configuracoes para quando o arquivo é executado como main -----
# if the application is not imported, but it's running by itself
if __name__ == '__main__':
    # 1. estamos importando o objeto banco criado no arquivo sql_alchemy
    from sql_alchemy import banco
    # 1. irá inicializar o banco quando o app for inicializado
    banco.init_app(app)
    # Debug true só enquanto estiver produzindo. Depois, colocar como False
    app.run(debug=True)

