# ===== Imports =========================================================================
# 3. importando obj banco criado em sql_alchemy
from sql_alchemy import banco
# =======================================================================================


# 3. ===== Classe hotel do tipo Model ===================================================
class UserModel(banco.Model):


# Parte que o SQL alchemy precisa para entender que é uma tabela e a estrutura da tabela
    # 3. ----- configurando nome da tabela ----- 
    __tablename__ = 'usuarios'

    # 1. ----- configurar cada atributo da nossa classe como coluna ----- 
    # 3. o ID será gerado automaticamente pelo sistema
    user_id = banco.Column(banco.Integer, primary_key=True)
    login = banco.Column(banco.String(40))
    senha = banco.Column(banco.String(40))
# ---------------------------------------------------------------------------------------

# Construtor POO da classe --------------------------------------------------------------
    # 3. definindo construtor; é aconselhavel criar, posteriormente, getters e setters
    # 3. não passando o user_id, e por ser primary key e integer, o sql alchemy criará
    # o id de forma incrementada
    def __init__(self, login, senha) -> None:
        self.login = login
        self.senha = senha
        
# ---------------------------------------------------------------------------------------

# Métodos modelo ------------------------------------------------------------------------
    # 3. metodo para converter objeto em um dicionario para a api depois converter para json
    def json(self):
        return {
            'user_id': self.user_id,
            'login': self.login
            # 3. não vamos emitir a senha, então não precisa criar
        }

    # 3. cls parameter means it's a class method, it means it has a
    # 3. different scope and accessability. it'll search in all
    # objects from this class
    @classmethod
    def find_user(cls, user_id):
        # 3. .query extend from banco.Model (consulta banco)
        # 3. SELECT * FROM hoteis WHERE hotel_id = hotel_id
        user = cls.query.filter_by(user_id=user_id).first()
        if user:
            return user
        else:
            return None

    # 3. salvando proprio objeto ao banco
    def save_user(self):
        # 3. adiciona objeto instanciado (tabela) ao banco
        banco.session.add(self)
        # 3. commita as ações feitas
        banco.session.commit()

    def delete_user(self):
        # 3. delete a si mesmo do banco
        banco.session.delete(self)
        # 3. commita
        banco.session.commit()
# ---------------------------------------------------------------------------------------
# =======================================================================================