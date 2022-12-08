# :whale: SWARM + AWS :cloud:

***

# Sumário: :round_pushpin:

- [Resumo](#resumo-memo)
    - [Descrição](#descrição)
    - [Conceitos fundamentais](#conceitos-fundamentais)
        

***

# Resumo: :memo:

- ## **Descrição**:
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)

    - Applicações maiores com mts acessos
    - Fazer load-balance (distribuir carga)
    - Escalar varias máquinas (em cluster) para uma mesma aplicação
    - Chamada tbm de arquitetura horizontal (invez da vertical que é uma marquina gigante e cara)
    - Um serviço que rege outros serviços
    - Gerenciar e escalar

<br>

- ## **Conceitos fundamentais**:
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)
    - ***Control Plane***: Onde ocorre o gerenciamento dos processos dos nodes.
    - ***Nodes***: máquinas que são gerenciadas pelo Control Plane.
    - ***Pod***: um ou mais containers que estão em um Node.
    - ***Deployment***: a execução de uma imagem/projeto em um Pod.
    - ***Services***: serviços que expõe os Pods ao mundo externo.
    - ***kubectl***: cliente de linha de comando para o Kubernetes.

    <br>

- ## **Minikube**:
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)
    - Minikube quickly sets up a local Kubernetes cluster on macOS, Linux, and Windows.
        - To check documentation and more infos, [follow](https://minikube.sigs.k8s.io/docs/).
    - Inicializar com o comando: ```$ minikube start --driver=<DRIVER>```
        - Driver exemplos: ***virtualbox, hyperv e docker***.
        - Quando nosso pc é reiniciado, o minikube para de funcionar automaticamente.
    - Para checar status: ```$ minikube status```
    - Parando com o comando: ```$ minikube stop```
    - Dashboard do minikube com o comando: ```$ minikube dashboard```
        - Para recuperar apenas o link: ```$ minikube dashboard --url```

<br>

- ## **Kubernetes**:
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)
    - Kubernetes is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation (CNCF).
        - To check documentation and more infos, [follow](https://kubernetes.io/docs/home/).
    
    1. ### **Deployment**:
        - Criação de Pods, definindo uma imagem e um nome, para, posteriormente, ser replicado entre os servidores.
        - É preciso que a imagem esteja no Hub do Docker, para gerar um Deployment.
        - ### **Exemplo:** <br>
            ***Python com Flask, Dockerfile e index.html:***
            - Faz o build da imagem (Dockerfile)
                - ```$ docker build -t <NOME-USUARIO>/flask-kubernetes-projeto .```
            - Faz o push da imagem para o HUB 
            - Roda um container de teste:
                - ```$ docker run -d -p 5000:5000 --name flask-hub --rm <NOME-USUARIO>/flask-kubernetes-projeto```
            - #### **Criar** um Deployment:
                - ```$ kubectl create deployment <NOME> --image=<IMAGEM>```
                - Exemplo: ```$ kubectl create deployment flask-deployment --image=purple_nose/flask-kub-projeto```
                    - Caso houver falhas, tente startar novamente o minikube: ```$ minikube start```
            - #### **Checar** Deployments: 
                1. Listar: ```$ kubectl get deployments```
                2. Configurações: ```$ kubectl describe deployments```
            
            - #### **Checar** Pods:
                1. Listar: ```$ kubectl get pods```
                2. Configurações: ```$ kubectl describe pods```

            - #### **Checar** Kubernetes configs:
                - ```$ kubectl config view```
                - Receberemos informações importantes baseadas no Minikube, que é por onde o Kubernetes está sendo executado.
            
    2. ### **Services**:
        - As aplicações do Kubernetes não tem conexão com o mundo externo, por isso precisamos criar um Service que é o que possibilita expor os Pods.
        - Os Pods são criados para serem destruídos (efêmeros) e perderem tudo, ou seja, os dados ferados neles serão apagados. Portanto, um Service é uma entidade separada dos Pods que expõe eles à uma rede.
        1. #### **Criar um Service:**
            - ```$ kubectl expose deployment <NOME> --type=<TIPO> --port=<PORT>```
                - Colocaqueremos o mesmo nome do Deployment já criado.
                - Existem vários ***tipo de Service***, porém o ***LoadBalancer*** é o mais comum, no qual todos os Pods são expostos.
                - A porta deve fazer conexão com a porta criada em nosso container (app.py e Dockerfile).
        2. #### **Gerar IP de acesso:**
            - ```$ minikube service <NOME>```
            ![](./images/gerando-ip.png)
            ![](./images/projeto-rodando-1.png)
        3. #### Verificando nossos Services:
            - Todos: ```$ kubectl get services```
            - Específico: ```$ kubectl describe services/<NOME>```
            
    <br>    

```$ ```

    <br>

- ## ****
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)
    -

    <br>