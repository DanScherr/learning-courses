# :whale: Connection between containers

## 1. create flask/(app.py + Dockerfile) <- copied from last exercise
![imagem-1](./images/1.png)
## 2. create mysql/(schema.sql + Dockerfile) <- copied from last exercise AND build image
![imagem-2](./images/2.png)
## 3. create a network to connect containers
![imagem-3](./images/3.png)
## 4. RUN mysql container (command --network)
![imagem-4](./images/4.png)
## 5. realizar alterações no flask/app.py