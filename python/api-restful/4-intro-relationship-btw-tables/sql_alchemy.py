''' 
    este documento servirá para criação do objeto banco que o sql alchemy
    irá utilizar para: 
        instanciamento do banco de dados, configurado como sqlite no 
        arquivo app.py e realizado antes da primeira requisição a api
        flask;
        construção (estrutural) do banco de dados em models/hotel.py
'''

from flask_sqlalchemy import SQLAlchemy

banco = SQLAlchemy()
