# ----- imports -----
# 1. importando obj banco criado em sql_alchemy
from sql_alchemy import banco


# 1. ----- nossa classe hotel agora será do tipo Model ----- 
class HotelModel(banco.Model):


    # 1. ----- configurando nome da tabela ----- 
    __tablename__ = 'hoteis'

    # 1. ----- configurar cada atributo da nossa classe como coluna ----- 
    hotel_id = banco.Column(banco.String, primary_key=True)
    nome = banco.Column(banco.String(80))
    estrelas = banco.Column(banco.Float(precision=1))
    diaria = banco.Column(banco.Float(precision=2))
    cidade = banco.Column(banco.String(40))

    # definindo construtor; é aconselhavel criar, posteriormente, getters e setters
    def __init__(self, hotel_id, nome, estrelas, diaria, cidade) -> None:
        self.hotel_id = hotel_id
        self.nome = nome
        self.estrelas = estrelas
        self.diaria = diaria
        self.cidade = cidade

    # metodo para converter objeto em um dicionario para a api depois converter para json
    def json(self):
        return {
            'hotel_id': self.hotel_id,
            'nome': self.nome,
            'estrelas': self.estrelas,
            'diaria': self.diaria,
            'cidade': self.cidade
        }
