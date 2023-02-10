# Dashboard

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


***

# **Create Dashboard**:
1. ng new dashboard
2. cd dashboard
3. ng serve

# Configurar **tsconfig.json**:
- ```"strict": false,```
- ```"noPropertyAccessFromIndexSignature": false,```

# Criando o **Module Dashboard**:
1. ```ng g module dashboard```
2. importar no módulo princial: app.module:
    - criar o index.ts para exportar
    - importar no app.module
    - caso queira, fazer o mesmo processo de import para o .spec

# Criando **Component Dashboard**:
1. ```ng g component dashboard```
    - utilizaremos apenas um component para exibir todos os gráficos.
    - portanto iremos criá-lo no diretório principal do nosso dashboard
2. importar e declarar o component no dashboard.module e exportá-lo também
    - exportá-lo no index.ts
3. importar no module principal: app.module:
    - já realizado o import por conta do export no dashboard.module
4. adcionar a tag referente ao dashboard.component selector no app.component.html
    - verificar no web browser

# Criando o **Serivce Dashboard**:
- será implementado um observable para simular uma chamada assincrona, nos retornando os dados
    - por mais que os dados aqui serão estáticos, em um projeto real nos iremos obte-los de forma assincrona acessando uma api
1. ```ng g service dashboard/dados```
    - iremos criá-lo no diretório principal do nosso dashboard
2. exportá-lo no index.ts, importá-lo e adc ao providers no dashboard.module
    - disponibilizando dados à aplicação
## 3. Implementando Service em dados.service

# Importando [API de gráficos](https://developers.google.com/chart?hl=pt-br) no projeto:
1. importar javascript principal:
    - carregar loader: ``````
    - normalmente se importa no angular.json "scripts": []
    - iremos importar no nosso index.html, logo acima do fechamento do ```</head>```

# Criando html e css dos gráficos do Dashboard:
- dispara gráficos e vai adicionando sempre à esquerda conforme tamanho da tela

# Implementando gráficos no component:
1. 