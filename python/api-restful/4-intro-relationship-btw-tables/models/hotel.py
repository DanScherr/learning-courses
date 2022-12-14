from sql_alchemy import banco

# teste

class HotelModel(banco.Model):


    __tablename__ = 'hoteis'

    hotel_id = banco.Column(banco.String, primary_key=True)
    nome = banco.Column(banco.String(80))
    estrelas = banco.Column(banco.Float(precision=1))
    diaria = banco.Column(banco.Float(precision=2))
    cidade = banco.Column(banco.String(40))
    # 1. a foreign key references in its parameters, table_title.column
    site_id = banco.Column(banco.Integer, banco.ForeignKey('sites.site_id'))
    # site = banco.relationship('SiteModel') # se fosse nXn (muitos para muitos)

    # 1. adicionar o site_id ao construtor
    def __init__(self, hotel_id, nome, estrelas, diaria, cidade, site_id) -> None:
        self.hotel_id = hotel_id
        self.nome = nome
        self.estrelas = estrelas
        self.diaria = diaria
        self.cidade = cidade
        self.site_id = site_id

    def json(self):
        return {
            'hotel_id': self.hotel_id,
            'nome': self.nome,
            'estrelas': self.estrelas,
            'diaria': self.diaria,
            'cidade': self.cidade,
            'site_id': self.site_id
        }

    @classmethod
    def find_hotel(cls, hotel_id):
        hotel = cls.query.filter_by(hotel_id=hotel_id).first()
        if hotel:
            return hotel
        else:
            return None

    def save_hotel(self):
        banco.session.add(self)
        banco.session.commit()

    def update_hotel(self, nome, estrelas, diaria, cidade, site_id):
        self.nome = nome
        self.estrelas = estrelas
        self.diaria = diaria
        self.cidade = cidade
        self.site_id = site_id

    def delete_hotel(self):
        banco.session.delete(self)
        banco.session.commit()
