import flask
from flask import request, json, jsonify
import requests
import flask_mysqldb
from flask_mysqldb import MySQL

app = flask.Flask(__name__)
app.config["DEBUG"] = True

# host.docker.internal -> our machine
app.config["MYSQL_HOST"] = 'host.docker.internal'
# por padrão usuario root e senha vazia
app.config["MYSQL_USER"] = 'root'
app.config["MYSQL_PASSWORD"] = ''
# nome do nosso banco
app.config["MYSQL_DB"] = 'flaskhost'

mysql = MySQL(app)

# def rota
@app.route("/", methods=["GET"])
# def funcao de rota
def index():
    data = requests.get('https://randomuser.me/api')
    return data.json()

# def rota
@app.route("/", methods=["GET"])
# def funcao de rota
def inserthost():
    data = requests.get('https://randomuser.me/api').json()
    username = data['results'][0]['name']['first']

    cur = mysql.connection.cursos()
    cur.execute("""INSERT INTO user(name) VALUES(%s)""", (username,))
    mysql.connection.commit()
    cur.close()
    return username


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port="5000")