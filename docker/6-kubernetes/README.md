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

- ## **Kubernetes**:
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)
    - Kubernetes is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation (CNCF).
        - To check documentation and more infos, [follow](https://kubernetes.io/docs/home/).
    
    - ### Deployment:
        - Criação de serviço que vai rodar no Pods, definindo uma imagem e um nome, para, posteriormente, ser replicado entre os servidores.
        - É preciso que a imagem esteja no Hub do Docker, para gerar um Deployment.
        - Exemplo:


    <br>



    <br>

- ## ****
    [:top: Voltar ao topo](#whale-swarm--aws-cloud)
    -

    <br>