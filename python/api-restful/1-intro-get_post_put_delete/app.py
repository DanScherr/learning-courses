from flask import Flask
from flask_restful import Api
from resources.hotel import Hoteis, Hotel


app = Flask(__name__)
# criando variável que irá inicializar aplicação flask
api = Api(app)

# adding a resource to the api
api.add_resource(Hoteis, '/hoteis')
api.add_resource(Hotel, '/hoteis/<string:hotel_id>')

# if the application is not imported and running by itself
if __name__ == '__main__':
    # Debug true só enquanto estiver produzindo. Depois, colocar como False
    app.run(debug=True)

