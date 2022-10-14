FROM python:3.10.6

WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app
RUN apt-get update -y &&\
    apt-get install -y python3-pip python-dev
RUN pip3 install flask-restful flask-jwt-extended
RUN pip3 install --no-cache-dir -r /usr/src/app/requirements.txt

COPY ["/models/", "/resources/", "/templates/", "app.py", "blacklist.py", "sql_alchemy.py", "/usr/src/app/"]

EXPOSE 5000

CMD [ "python3", "./app.py" ]