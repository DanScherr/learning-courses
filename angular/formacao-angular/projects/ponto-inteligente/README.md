# PontoInteligente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# **Introduction**:

## 1. Configurar o [Angular Material](https://material.angular.io/)
- Realizar imports no [./src/app/app.module.ts](./src/app/app.module.ts)

    1.1. BrowserAnimationsModule

    1.2. [MatButtonModule](https://material.angular.io/components/button/api)
        
    - we'll see later how to [implement the button](https://material.angular.io/components/button/overview). [Check here!](#2-adicionar-botão-com-angular-material)

1.3. Carregar os módulos importados do Angular Materials no @NgModule do [./src/app/app.module.ts](./src/app/app.module.ts)

1.4. Uso da biblioteca Hammer no arquivo [./src/main.ts](./src/main.ts): ```import 'hammer.js'```
- Para que os componentes de sliders e outros (eventos de touch) funcionem.

1.5. Nosso material depende de um css como tema:
- importar tema no [./src/style.css](./src/styles.css)

1.6. Para utilizarmos ícones:
- importar fonte no [./src/index.html](./src/index.html)

## 2. Adicionar Botão com Angular Material
2.1. Acionar html do botão:
- Nossa apilcação se encontra toda em [src/app/app.component.html](./src/app/app.component.html)
- Limpar conteúdo prévio padrão
- adicionar html do botão

# **Login**

## 1. **Criando módulo** de Login:
1.1. on terminal: ```$ ng g module autenticaco/login```
- cria modulo login dentro de autenticação
- escopo de identificação ficará como: login, tela de cadastro de pessoa fisica, tela de cadastro de pessoa juridica
    - com isso vamos modularizando e separando nossa aplicação por domínios distintos
- será criado um arquivo principal de módulo de login

1.2. Configurar nosso módulo de login como módulo da nossa aplicação principal em [./src/app/app.module.ts](./src/app/app.module.ts).

1.3. Adicionar LoginModule no @NgModule em [./src/app/app.module.ts](./src/app/app.module.ts) utilizando a **técnica barrils** para realizar exports para níveis superiores de forma resumida.
- 1.3.1. Criar arquivo index.ts em /login/ e realizar export do modulo
- 1.3.2. Criar arqui index.ts em /autenticação/ e realizar export do login
- 1.3.3. Atualizar import no [./src/app/app.module.ts](./src/app/app.module.ts)

## 2. **Criando Componente** de Login:
2.1. on terminal: ```$ ng g component autenticacao/login/components/login```
- cria diretorio /components/login/ dentro de ./src/autenticacao/login/
- cria 4 arquivos no diretório /components/login/ (.html, .css, .components.ts., .components.spec.ts)
    - como boas práticas é aconselhado criar outro diretório para especificar se você tiver mais que 5 arquivos em um mesmo diretório.

2.2. Será atualizado automaticamente o import no arquivo login.module.ts..
- porém, iremos alterar esse import com o **métodos barrils**.

    2.2.1. Criar novo arquivo em login/components/login/ chamado index.ts
    - fazer o export do component do login.component

    2.2.2. Criar novo arquivo em login/components/ chamado index.ts
    - fazer o export do component login

    2.2.3. Atualizar import no arquivo login.modules.ts
    - precisa também estar declarado no @NgModule


# **Adicionando Rota**:
- é através dela que temos acesso ao modulo, às páginas, aos components.
- serão criadas no **formato modularizado**.
    - cada modulo terá sua própria rota
    - todas as rotas serão adicionadas à uma rota principal que é a rota da aplicação.
## 1. Criar um arquivo de rotas no nosso módulo principal da aplicação /app/:
- no terminal: ```$ ng g class app-routing.module```
- 2 arquivos serão criados.
## 2. Criar arquivo de rotas para cada módulo criado:
- no terminal: ```$ ng g class autenticacao/login/login-routing.module```
- 2 arquivos serão criados.
## 3. Criar um component de porta de entrada para nossas rotas em nossos módulos (no modulo login):
- no terminal: ```$ ng g class autenticacao/login/components/logar.component```
- 2 arquivos serão criados.
## 4. Configurar nosso arquivo de aplicação ROOT, app-routing.module.ts
## 5. Importar em app.module.ts
- 5.1. Importar no @NgModule
    - deverá ser o último da lista. recomendado deixar uma linha em branco antes dele
## 6. Configurar app.component.html:
- o Angular vai adicionando submódulos como se fossem divs e subdivs dentro da aplicação (subcontainers)
- eles são inseridos nas páginas (.html) através de uma diretiva especial chamada **router-outlet**
    - assim o Angular sabe que o submodulo que é filho de todo esse módulo raiz vai ser inserido dentro dessa diretiva
## 7. Configurar rota para módulo filho \app\autenticacao\login\ **components\logar.component.spec.ts**
- 7.1. Adicionar a nova classe criada de component no index.ts
- 7.2. Importar em login.module.ts e importá-lo
- 7.3. Importar o RouterModule e declará-lo
## 8. Configurar rota para módulo filho \app\autenticacao\ **login\login-routing.module.ts**
- 8.1. Exportar em index.ts o ./login-routing.module
## 9. Importar em app.module.ts o LoginRoutingModule

# **Criando tela de Login**:
- formulário Reativo -> quando trazemos a informação do Angular para dentro do nosso componente
## 1. Importar para o login.module.ts:
- 1.1. ReactFormsModule: responsável por criar os formulários reativos
- 1.2. HttpClientModule: fazer conexão com API
- 1.3. Importar módulos do angular material para o login.module.ts
- 1.4. Import FlexLayoutModule
- 1.5. Adicionar para carregar todos os modulos importados no @NgModule imports
## 2. Importar para o login/components/login/login.component.ts:
- 2.1. Mapeamento do html com o nosso component (form, email e senha)
- 2.2. Declarar recursos necessários no construtor
- 2.3. Construir método responsável por mapear a nossa aplicação/formulario
    - gerarForm
    - logar

# **Criando Model de Login**:
## 1. Models:
- 1.1. Criar pasta em app/autenticacao/login
- 1.2. Criar arquivo login.model.ts para criar classe Login
- 1.3. Criar index.ts
- 1.4. Adc export no ../index.ts
- 1.5. Importar classe Login no login.component.ts
- 1.6. Adicionar lógica criando objeto login da classe Login criada em login.component.ts

# Criando Serviço
## 1. Criando pasta Environment em /src/
- 1.1. Local
    - quando estivermos usando ngserver, applicação usará dados do environment.ts (criar arquivo)
        - inserir valor da api local 
- 1.2. Produção
    - quando subirmos para produção com ngbuild --project, o angular utilizará o environment.prod.ts (criar arquivo)
        - inserir valor da api de produção
## 2. Criando Serviço:
- 2.1. no terminal ```$ ng g service autenticacao/login/services/login```
- 2.2. Configure login.service.ts
- 2.3. Create and configure index.ts
- 2.4. Update ../index.ts exportando diretório /services/
## 3. Dependencias do Serviço:
- 3.1. Falar para o módulo de login que existe um serviço
    - 3.1.1. Importar LoginService
    - 3.1.2. Declara dentro de NgModule como provider
        - pronto para ser usado pelos componentes..
- 3.2. Configurando no Componente:
    - 3.2.1. importando em login.component.ts
    - 3.2.2. instanciando no contrutor
    - 3.2.3. implementando bloco de código
