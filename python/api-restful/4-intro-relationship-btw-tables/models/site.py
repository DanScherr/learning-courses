from sql_alchemy import banco


class SiteModel(banco.Model):


    __tablename__ = 'sites'

    site_id = banco.Column(banco.Integer, primary_key=True)
    url = banco.Column(banco.String(80))
    # create relationship with hoteis Class
    hoteis = banco.relationship('HotelModel') # list of objects hoteis (type of list: hotel instaces)

    def __init__(self, url) -> None:
        self.url = url

    def json(self):
        return {
            'site_id': self.site_id,
            'url': self.url,
            'hoteis': [hotel.json() for hotel in self.hoteis]
        }

    @classmethod
    def find_site(cls, url):
        site = cls.query.filter_by(url=url).first()
        if site:
            return site
        else:
            return None

    @classmethod
    def find_site_by_id(cls, site_id):
        site = cls.query.filter_by(site_id=site_id).first()
        if site:
            return site
        else:
            return None

    def save_site(self):
        banco.session.add(self)
        banco.session.commit()

    def delete_site(self):
        # 1. before deleting, need to delete all the hoteis related to site_id
        # temos a lista de hoteis que foi criada no construtor
        [   hotel.delete_hotel()
            for hotel in self.hoteis    ]
        banco.session.delete(self)
        banco.session.commit()
