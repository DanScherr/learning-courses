class HotelModel:
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
