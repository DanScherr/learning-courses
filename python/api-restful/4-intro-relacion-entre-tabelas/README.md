# Documentação de criação logica de estrutura

## A. Estrutura base

### 1. Cria-se o objeto banco do tipo SQLAlchemy em ./sql_alchemy.py

<br>

### 2. Cria-se em ./app.py um objeto app do tipo Flask
###### -> ***estrutura base do I ao IV***
###### -> ***V é customizavel***
> I. Configura-se o objeto app para criar um banco do tipo SQLite

> II. Configura-se o objeto app para ser uma api do tipo restful

> III. Configura-se decorador para criar banco junto com toda sua estrutura

> IV. Configura ( if __name__ == '__main__': ) no final do código

---

## B. Estrutura customizavel ***levando em conta a modelagem de negócio***

> V. Implementa código entre III e IV para adicionar os Recursos á api

<br>

### 1. Cria-se na ferramenta **POSTMAN** as requisições necessárias de ação aos recursos: {Instâncias} e Coleções

<br>

### 2. Cria-se em ./Modelos/ um arquivo .py modelo para a criação das classes, atributos e métodos da entidade do recurso da api
> I. Importa-se o objeto banco criado para poder fazer conexão, armazenamento, escrita, leitura, etc

> II. Cria-se uma classe

    > a. A classe deve montar a estrutura da tabela a ser adicionada ao objeto banco importado: contendo o nome da tabela e as colunas

    > b. Depois, cria-se o construtor da classe, junto com os métodos de ação com o banco de dados e devolução de metadados

### 3. Cria-se em ./resources/ um arquivo .py para conter as classes, atributos e os métodos de ação dos recursos da api (get, put, post, delete) para uma determinada entidade
###### -> importar classe correspondente em ./models
###### -> toda classe a ser usada na aplicação deve ser importada em ./app.py e adiciona como recurso em A.2.IV.
> I. Caso Instância:

    > Métodos de pesquisa, acesso e retorno ao banco

> II. Caso Coleção:

    > Definir construtor que herda da classe Resource os métodos de contrução dos metadados para traduzir json para dicionário e trabalhar no python
