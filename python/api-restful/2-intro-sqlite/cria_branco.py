import sqlite3

# cria conexão com banco de dados nomeado banco.db
connection = sqlite3.connect('banco.db')
# cursos que irá atuar no banco de dados modificando-o
cursor = connection.cursor()


# script que sera passado para o cursor realizar atividades no banco
# primeiramente ira criar a tabela sem dados (estruturalmente)
cria_tabela = 'CREATE TABLE IF NOT EXISTS hoteis (hotel_id text PRIMARY KEY, \
                                                  nome text, estrelas real, \
                                                  diaria real, cidade text)'
# segundamente iremos criar script para preencher dados
cria_hotel = "INSERT INTO hoteis VALUES ('alpha', 'Alpha Hotel', 4.3, \
                                        345.30, 'Rio de Janeiro')"


# mandar o cursor executar script
cursor.execute(cria_tabela)
# mandar o cursor inserir dados na tabela hoteis com novo hotel
cursor.execute(cria_hotel)


# enviar scripts para o banco
connection.commit()
# encerrar conexão
connection.close()