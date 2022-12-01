# :whale: SWARM + AWS :cloud:

***

# Sumário: :round_pushpin:

- [Resumo](#resumo-memo)
    - [Descrição](#descrição)
    - [Conceitos fundamentais](#conceitos-fundamentais)
    - [Iniciando na aws](#iniciando-na-aws)
    - [Monitoramento](#monitoramento)

***

# Resumo: :memo:

- ## **Descrição**:
    - Applicações maiores com mts acessos
    - Fazer load-balance (distribuir carga)
    - Escalar varias máquinas (em cluster) para uma mesma aplicação
    - Chamada tbm de arquitetura horizontal (invez da vertical que é uma marquina gigante e cara)
    - Um serviço que rege outros serviços
    - Gerenciar e escalar


- ## **Conceitos fundamentais**:
    - Nodes: instância (maquina) que participa do swarm
    - Manager Node: que gerencia
    Worker Node: que trabalham em função do manager (operario)
    - Service: um conjunto de tasks que o manager manda o worker executar
    - Task: comandos que são executados no Nodes;

- ## **Iniciando na aws**:

- Recomendável ir salvando IDs tokens, portas, etc em um arquivo.
- *for more information on how swarm works, [follow](https://docs.docker.com/engine/swarm/how-swarm-mode-works/services/).*
    - Criar instâncias EC2 (gratuito) - criou-se 3 nodes
    - Security:
        - Baixar chave
        - Posicionar arquivo de chave na ***pasta .ssh*** e alterar permissão de grupos de usuários para a pasta/arquivo
        - alterar: ***security group*** -> clicar no id do servidor -> editar regras de entrada -> configurar conforme imagem a baixo.
        ![imagem](./images/regras-de-entrada-redes-portas.png)
    - ***Iniciar instâncias*** (mudar para estado 'executando'; 'Estado de insância'; conforme imagem a baixo)
    ![imagem-executando-instancias](./images/executando-instancias.png)
    - Escolher uma instância para ser ***Manager*** e executar:
        - Clickar no ID da instância -> clickar em Conectar -> seguir instruções..
        - Quando o servidor estiver rodando execute:
            - ```$ docker ps```
                - Caso não tenha o docker instalado:
                    - ```$ sudo yum update -y ```
                    - ```$ sudo yum install docker```
                    - ```$ sudo service docker start```
                    - Conceder usuário no docker:
                        - ```$ sudo usermod -a -G docker ec2-user```
                - Caso já tenha, pular para os próximos passos..
            - ```$ docker swarm init```
                - copiar o ***token*** que aparecerá para realizar os joins dos workers (máquinas que irá conectar)
            
            - Para sair:
                - ```$ sudo docker swarm leave -f```
        - Algumas vezes será necessário declarar o IP do servidor com a tag ***--advertise-addr***
        - Fará com que a instância/máquina vire um ***node***
        - Tranfsorma o Node em um ***Manager***

- ## **Monitoramento**:
    - ```$ docker node ls```
    - Serviços serão exibidos no terminal

- ## **Adicionando novos Nodes**:
    - ```$ docker swarm join --token <token><IP>:<PORTA>```
    - Desta forma duas máquinas estarão conectadas.
    - Esta nova máquina entra na hierarquia como ***Worker***.
    - Todas as ações (***tasks***) utilizadas na Manager, serão ***replicadas*** em Nodes que foram adicionados com join.

- ## **Subindo um serviço para o lider na AWS (container)**:
    - *for more information on how services on docker works, [follow](https://docs.docker.com/engine/reference/commandline/service/).*
    - Comando base
        - $ ```docker service create --name <nome><imagem>```
    - Com o exemplo do nginx, é necessário liberar a porta 80 na aws (já realizado).
    - Para rodar com a aws será necessário fazer o docker swarm init com a tag '--advertise-addr <numero-ip>' (ip do servidor se encontra em 'instancias' -> seleciona servidor -> 'Endereço IPV4 público').
        - Caso já tenha inicializado o init sem a tag, refaça!
     - Ex:
     - *for more information about nginx on docker, [follow](https://hub.docker.com/_/nginx)*.
        - ```$ sudo docker service create --name nginxswarm -p 80:80 nginx```
        - inicialmente, não está sendo escalada.
        ![nginx-lider-service](./images/nginx-lider-service.png)
        - Serviço inicializado pelo swarm
    - Para listar serviços:
        - ```$ docker service ls```
    - ***Obs***: node é a maquina que estamos rodando com o swarm e service é o projeto que estamos rodando. só que não obrigatoriamente tem-se um projeto rodando que é necessário que estejam rodando todas as máquinas com swarm. então é bom saber separar as coisas pra saber o que está rodando como serviço e como está rodando como node. 
        - ```$ node ls``` -> máquinas conectadas
        - ```$ service ls``` -> projetos rodando
    - Remover serviços:
        - ```$ docker service rm <nome>```

- ## **Aumentando número de réplicas**:
    - Criando serviço com número maior de réplicas:
        - ```$ docker service create --name <nome> --replicas <numero> <imagem>```
        - Desta maneira uma task será emitida, replicando este serviço nos workers
        - Agora inicia-se, de fato, a orquestração.
        - Pode-se checar o status com:
            - ```$ docker service ls```
    - Atualizando número de réplicas com serviço já criado:
        - ```$ docker service update --replicas 3```
        - Pode-se checar o status com:
            - ```$ docker service ls```
    - Pode-se verificar, também, containers rodando nos outros nodes com o ```$ docker ps```.
    
- ## Copiando arquivos para a instância na AWS:
- *for more information about sftp communication using ssh, [follow](https://www.ssh.com/academy/ssh/sftp)*

    - Usando comando scp (secure copy):
        - ```$ scp -i "~/.ssh/aws-key.pem" "index.html" ec2-user@ec2-3-89-27-181.compute-1.amazonaws.com:~/```


***

- ## section 8, a partir 134:
