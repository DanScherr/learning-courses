FROM python:3

RUN apt-get update -y && \
    apt-get install -y python3-pip python-dev

WORKDIR /app

RUN pip3 install Flask

COPY . .

CMD ["python3", "./app.py"]