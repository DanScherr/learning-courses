import site
from flask_restful import Resource
from models.site import SiteModel


class Sites(Resource):


    def get(self):
        # 1. retorna uma lista de objetos da classe SiteModel no formato json
        return {'sites': [site.json() for site in SiteModel.query.all()]}



class Site(Resource):


    def get(self, url):
        site_procurado = SiteModel.find_site(url)
        if site_procurado:
            return site_procurado.json()
        return {'message': 'Site not found'}, 404

    def post(self, url):
        site_procurado = SiteModel.find_site(url)
        print(site_procurado)
        if site_procurado:
            return {'message': f"The site '{site_procurado} already exists"}, 400
        novo_site = SiteModel(url)
        try:
            novo_site.save_site()
        except:
            return {'message': 'An internal error ocurred trying to create new site'}, 500
        return novo_site.json()

    def delete(self, url):
        site_procurado = SiteModel.find_site(url)
        if site_procurado:
            try:
                site_procurado.delete_site()
                return {"message": f"{site_procurado.url} deleted."}, 500
            except:
                return {'message': 'An internal error ocurred trying to delete site'}, 500
        return {'message': 'Site not found'}, 404