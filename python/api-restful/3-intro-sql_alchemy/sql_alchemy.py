''' 
    este documento servirá para criação do objeto banco que o sql alchemy
    irá utilizar para: 
        instanciamento do banco de dados, configurado como sqlite no 
        arquivo app.py e realizado antes da primeira requisição a api
        flask;
        construção (estrutural) do banco de dados em models/hotel.py
'''

# ----- imports -----
# 1. importando SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

# 1. criar uma variavel banco e instancia-la como um objeto do tipo SQLAlchemy
# 1. que será importado nos outros arquivos
banco = SQLAlchemy()

# 1. realizar alterações em app.py na parte de if __name__ == '__main__' para importar o objeto no arquivo
# 1. para importar o banco do sql_alchemy apenas quando o app.py rodar por si mesmo como main
# 1. pois como vamos importa-lo dentro da classe hotel também, precisamos dessa estrutura de codigo
# 1. para não cairmos em import circular

