# utiliza imagem do python do HUB
FROM python:3

# instalando pacotes
RUN apt-get update -y &&\
    apt-get install -y python3-pip python-dev


# settando diretorio de trabalho do container
WORKDIR /app

# instalando bibliotecas
RUN pip install Flask requests flask_mysqldb

# copiando arquivos do nosso diretorio host para workdir
COPY . .

# expondo porta 5000
EXPOSE 5000

# rodando a aplicação na linha de comando do nosso container
CMD ["python", "./app.py"]
