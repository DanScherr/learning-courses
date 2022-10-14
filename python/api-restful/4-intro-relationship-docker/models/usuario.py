from urllib import request
from sql_alchemy import banco
from flask import request, url_for
from requests import post
from dotenv import dotenv_values

env_vars = dotenv_values("./ambvir/.env")

class UserModel(banco.Model):


    __tablename__ = 'usuarios'

    user_id = banco.Column(banco.Integer, primary_key=True)
    login = banco.Column(banco.String(40), nullable=False, unique=True)
    # 2. criando email de confirmacao
    email = banco.Column(banco.String(40), nullable=False, unique=True)
    senha = banco.Column(banco.String(40), nullable=False)
    # 2. coluna para ativação do usuario
    ativado = banco.Column(banco.Boolean, default=False)

    def __init__(self, login, email, senha, ativado) -> None:
        self.login = login
        self.email = email
        self.senha = senha
        self.ativado = ativado

    def send_confirmation_email(self):
        print(f' O USUARIO ----> {self.user_id}')
        print(self.email)
        link = request.url_root[:-1] + url_for('userconfirm', user_id=self.user_id)
        print(env_vars['MAILGUN_API_KEY'])
        # request.url_root[:-1] # http://127.0.0.1:5000
        # 2.0 estaremos iterando a url do resource UserConfirm
        # url_for('userconfirm', self.user_id) # confirmacao/{user_id}
        return post(
                    f"https://api.mailgun.net/v3/{env_vars['MAILGUN_DOMAIN']}/messages",
                    auth=   (   "api", f"{env_vars['MAILGUN_API_KEY']}"),                      # authorization with api key from mailgun
                    data=   {  "from": f"{env_vars['FROM_TITLE']} <{env_vars['FROM_EMAIL']}>",     # name and email
                                "to": self.email,                         # can put a list
                                "subject": "Confirmação de cadastro",          # title
                                "text": f"Confirme seu cadastro clicando\
                                            no link a segui: {link}",        # body com o link para confirmação de usuario
                                "html": f'  <html>\
                                                <p>\
                                                    Confirme seu cadastro clicando no link a segui: \
                                                    <a href={link}> \
                                                        CONFIRMAR EMAIL\
                                                    </a>\
                                                </p>\
                                            </html>'
                            }            
                    )
        
    def json(self):
        return {
            'user_id': self.user_id,
            'login': self.login,
            'email': self.email,
            'ativado': self.ativado
        }

    @classmethod
    def find_user(cls, user_id):
        user = cls.query.filter_by(user_id=user_id).first()
        if user:
            return user
        else:
            return None

    @classmethod
    def find_user_by_login(cls, login):
        user = cls.query.filter_by(login=login).first()
        if user:
            return user
        else:
            return None

    @classmethod
    def find_user_by_email(cls, email):
        user = cls.query.filter_by(email=email).first()
        if user:
            return user
        else:
            return None

    def save_user(self):
        banco.session.add(self)
        banco.session.commit()

    def delete_user(self):
        banco.session.delete(self)
        banco.session.commit()
