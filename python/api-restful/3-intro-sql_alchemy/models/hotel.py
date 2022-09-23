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

    # 2. cls parameter means it's a class method, it means it has a
    # 2. different scope and accessability. it'll search in all
    # objects from this class
    @classmethod
    def find_hotel(cls, hotel_id):
        # 2. .query extend from banco.Model (consulta banco)
        # 2. SELECT * FROM hoteis WHERE hotel_id = hotel_id
        hotel = cls.query.filter_by(hotel_id=hotel_id).first()
        if hotel:
            return hotel
        else:
            return None

    # 2. salvando proprio objeto ao banco
    def save_hotel(self):
        # 2. adiciona objeto instanciado (tabela) ao banco
        banco.session.add(self)
        # 2. commita as ações feitas
        banco.session.commit()

    # 2. criando metodo do proprio objeto para realizar update da tabela
    def update_hotel(self, nome, estrelas, diaria, cidade):
        # 2. ressetando os atributos, menos o ID que ja está correctamente
        # setado pois o update está vindo do find_hotel
        self.nome = nome
        self.estrelas = estrelas
        self.diaria = diaria
        self.cidade = cidade

    def delete_hotel(self):
        # 2. delete a si mesmo do banco
        banco.session.delete(self)
        # 2. commita
        banco.session.commit()
