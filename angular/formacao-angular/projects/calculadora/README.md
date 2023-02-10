# star wars site api

###

***

# Sumário:

- [Introdução](#introdução)

# Introdução:

- ## **NodeJS**:
    - Uma plataforma JavaScript para construção de aplicações rápidas e escaláveis
    - Executa código JavaScript do lado do servidor


- ## **Npm**:
    - Instalador de pacotes do NodeJS


- ## **Criando um projeto e executando**:
    - ```$ ng {nome projeto}``` -> prepara o ambiente criando toda a estrutura de arquivos e instalando dependências com o npm.
    - ```$ cd {nome projeto}```
    - ```$ ng serve``` -> compila código e instancia um servidor web com o projeto.
        - **servidor em modo escuta**, ou seja, atualiza instantaneamente as mudanças efetuadas na aplicação.
    
- ## **Arquitetura modular do Angular**:
    - Modular: parecido ao microserviços. Pequenos pedaços de software dentro dele que se comunicam entre si. 
    - Para cada entidade de negócio, um novo módulo deve ser criado. 
        - Dentro do módulo de cada entidade, seguem as ações correspondentes de cada uma
    - Módulo Principal (applicação será executada através dele, o qual conterá outros módulos dentro dele):

- ## **TypeScript**:
    - Linguagem utilizada pelo Angular para o desenvolvimento.
    - [Check for more](https://www.typescriptlang.org/)

- ## **Webpack**:
    - Gerenciador de códigos para a nossa applicação.
    - Traduz os códigos de diferentes formatos para o navegador entender.

- ## **Estrutura do projeto**:
    - ./angular.json: arquivo de configuração do Angular CLI.
    - .editorconfig: configurações do editor
    - karma.config.js: configurações de execução de testes unitários
    - package.json: onde se encontram todas as dependências do projeto. ```npm install``` -> para instalar as dependências do projeto. Depois disso aparece a pasta node_modules. após isso pode-se executar ```ng serve```.
    - protactor.config.js: testes de integração.
    - tsconfig: informações sobre a compilação.
    - tslint.json: validação de código.
    - ./e2e/: dir voltado para testes de integração.
    - ./node_modules/: contém todas as bibliotecas do projeto. Se interage a ele através dos comandos npm, o qual faz o gerenciamento.
    - ./src: source Root. todo codigo fonte da applicação
        - /app: onde ficará nosso código fonte. ***Módulo principal***. Para cada outro módulo (entidade de negócio), terá uma estrutura de 5 arquivos como segue abaixo:
            - /app.component.css: aplicação de estilo css ao componente.
                - {{}} -> atributo entre componente e view.
            - /app.component.html: o que vai renderizar na tela.
            - app.component.spec.ts: arquivo de teste.
            - app.component.ts: arquivo responsável por configurar a classe dos componentes (nome da tag que será importada em ./../../index.html e etc.)
            - app.module.ts: arquivo de configuração de módulo, o qual contem os componentes.
                - @NGModule:
                    - declaração do nosso componente exportada pelo app.component.ts que será renderizado na tela.
                    - imports
                        - outros módulos
                    - providers = serviços (normalmente utilizado nos componentes)
                    - bootstrap: informa que este é o modulo principal e que será executado no momento em que a página será executada.

        - /assets: imagens ou arquivos estáticos.
        - /environment: versão de produção ou desenvolvimento.
        - polyfills.ts: adicionar bibliotecas que servem para contornar erros entre outras coisas do projeto.

- ## **Scripts do Angulas CLI**:
    - ```$ ng serve``` -> subir aplicação
    - ```$ ng test``` -> executar testes unitários
    - ```$ ng e2e``` -> executar testes de integração
    - ```$ ng lint``` -> verificar se código criado está padronizado
    - ```$ ng build --prod``` -> gera um código já pronto para subir para produção

- ## **Funcionamento**:

    Navegador -> URL -carrega> index.html -executa arquivo bootstrap do angular-> app.modules.ts -referencia-> app.component.ts -contém a configuração que a tag em index.html irá ser substituida pelo app.component.html.

    - ### Criando e configuando **Módulo**:
        - #### Criando módulo;
            - no terminal: ```ng g module {module name}```
                - será criado um diretório com o nome do modulo indicado no ./src/app/
                - o diretório nasce cru, apenas com configurações padrões. é necessário realizar configurações específicas
        
        - #### Associando o modulo criado ao modulo principal:
            - acessar ./src/app/app.module.ts
            - importar ele no arquivo com o import e em seguida no ```@NGModule{[... imports: [**HERE**]]}```
            - método barrils (auxiliar imports): criar arquivo index.ts no diretório ./src/app/{module name} e escrever ```export * from '/{module name}.module';```
                - com isso, podemos retirar o nome do arquivo e deixar apenas o nome do diretório

    - ### Criando, configurando e inserindo **Componente**:

        - #### Criando e configurando:
            - no terminal: ```$ ng g component {module directory}/{component name}```
            - it'll create a directory inside the module directory. 
                - rename it to components
            - inside that created directory will be automatically created the component main 4 files (.css, .html, .component.spec.ts, .component.ts)
            - updates .module.ts from principal module directory, already associating the component to the module

            - create a index.ts inside the renamed components directory
                - code the exporting code: ```export * from './{module name}.component'```
                - update the {module directory}.module.ts file with the import of only the components directory ```import { CalculadoraComponent } from './components';```
            
            - with that we can already see in our main page the component (if we are using its tag)
                - inside the components/{component name}.component.ts we can see the tag name in the notation ```@Component({selector: 'app-calculadora'``` code.
                - the tamplate and style it's the .html and .css web page to be renderized

            - ```export class ....```:
                - for good practice, Angular already implements a interface (que seria tipo uma regra a qual temos que cumprir)
                    - OnInit (interface de ciclo de vida) -> chamado logo quando o objeto é instanciado
                        - toda vez que implementada deve-se utilizar também o método ```ngOnInit() {}```
                            - serve para implementar metodos de carregamento mais demorados (importar bases e etc)
                            de forma assincrona
                        - ```construtor () {}``` serve para carregamento do objeto (precisa ser mais rápido)

        - #### Inserting the new component:
            - get the tag from calculadora.component.ts archive, from the notation @Component and the key selector and insert it on the app.component.html as a open/closed tag <></>
            - export it on the calculadora.module.ts

    - ### Creating Calculadora's Service:

        - The Service is a Class, that it's created to mantain the business rules of the application.
        - It takes care of the navigation between the view and the business rules (requisitions, calls, etc. to external serves, apis , etc.)
        - It'll be created to execute the operations.

        - ```ng g service calculadora/service/calculadora```
            - it will create a service directory abova src/app/calculadora/
                - like the components directory
            - it will create 2 archives .service.spec.ts and .service.ts
        
        - it's recomended not to have more than 5 services archives
            - it's better to create subdirs

        - it's the @injectable notation that makes it a service on the service.ts archive.
            - the service is just a normal class, but because of its notation, Angular provides this class to other classes in an automatic way. what we call of dependency injections.
            - who's going to consume this service will be our calculator component
            - so we need to inform that the component needs to access a service
                - and through this @injectable notation, Angular can do that
        
        - create a index.ts file to export it (good practice).
            - ```export * from './calculadora.service';```
            - as we have now 2 directories above our main module calculadora, we can re-export its subdirs in the calculadora/index.ts
                - so we can add the other exported components and services in the archive
        
        - We need to add another entry to the calculadora.module.ts
            - first import service
            - providers: []
            - we do this so that Angular knows calculadora.service is a provider and can be used in other classes

        - to use the service in the component: 
            - we need to import the service in calculadora.component.ts archive
            - and call it on the constructor
            - ```export class CalculadoraComponent { constructor ( private claculadoraService: CalculadoraService ) {} }```
                - o private serve para termos escopo do serviço de modo interno com o this.
            - para que quando o Angular chamar o component calculadora, através do construtor, instancie o service também.

    - ### Creating the Calculadoras html interface:
        - copy from the ./assets/calculadora the archives .html and .css from the course and paste it on the ..../app/calculadora/components/  .css .html
        - still missing the bootstrap

    - ### Bootstrap:
        - FrameWork for stylying for html
        - npm install --save bootstrap@3
        
        - How to registry it on our application:
            - root of the project
            - on the archive angular.json
            - entry styles

        - Necessário reinicializar o servidor para importar o arquivo

    - ### Implementing CalculadoraService:
        - archive: [calculadora.service.ts](./formacao-angular/projects/calculadora/src/app/calculadora/service/calculadora.service.ts)
        - good practice: when you need to use many times a same simble, to create a CONSTANT that represents it.
            - you may give a more comprehensive name
            - easier to reuse
            - if you need to replace its value, you may edit it in one place only

    - ### Testing CalculadoraService:
        - Create a testing class
        - archive: [calculadora.service.spec.ts](./formacao-angular/projects/calculadora/src/app/calculadora/service/calculadora.service.spec.ts)
        - ```ng test```
            - it'll open a new chrome window with karma
        - app.component didnt find app.calculadora -> app component it's not loading it
            - going to app.module.ts we imported CalculadoraModule; thats why we can access it.
            - but we also need to import in the app.component.spec to create the same context of our application.
            - configure calculadora.service.spec.ts
            - and import in the calculadora.component.spec.ts and configure the provider.
            - configure and create the testing methods in calculadora.service.spec.ts
        - Debugando:
            - on Karm, click on "Debug" -> right click on panel -> "inspect" -> "Sources" tab -> webpack://src/app/calculadora/service/calculadora.service.ts -> click on the line number to add a breacking point so that we can debug it -> then reload page
            - by pointing the mouse above the variables you can identify the values
            - click 'F8' to stop
            - 'F10' to step over -> see line by line.

    - ### Implementing Component CalculadoraComponent:
        - calculadora.component.ts

    - ### Refer the Component created on our interface:
        - Open calculadora.component.html
        1. Implement displya logic in text input with the Angular atribution operator

