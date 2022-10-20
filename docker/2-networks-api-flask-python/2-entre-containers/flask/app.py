import flask
from flask import request, json, jsonify
import requests
from flask_mysqldb import MySQL

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# como os containers estaraão conectados na mesma rede, poderemos passar o container do mysql criado
app.config["MYSQL_HOST"] = 'mysqlapicontainer'
app.config["MYSQL_USER"] = 'root'
app.config["MYSQL_PASSWORD"] = ''
app.config["MYSQL_DB"] = 'flaskdocker'

mysql = MySQL(app)

# def rota
@app.route("/", methods=["GET"])
# def funcao de rota
def index():
    data = requests.get('https://randomuser.me/api')
    return data.json()


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port="5000")