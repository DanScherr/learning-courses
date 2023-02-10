import { NgModule } from '@angular/core' // README.ROUTING.4.
import { Routes, RouterModule } from '@angular/router' // README.ROUTING.4.


/** README.ROUTING.4. */
export const routes: Routes = [ // definindo rota da aplicacao 
// para quando receber chamada na raiz da aplicação,
  { path: '', redirectTo: '/login', pathMatch: 'full' } // faça o redirecionamento para a tela de login.
];

/** README.ROUTING.4. */
@NgModule({ // classe do tipo @NgModule
    imports: [ RouterModule.forRoot(routes) ], // importando as rotas
    exports: [ RouterModule ] // exportando
}) // quando a aplicação é carregada, um único objeto RouterModule é gerado
// e conforme vai se adicionando rotas a ele, ele vai criando uma arquitetura
// de árvore com todas as rotas e todos os mapeamentos da nossa classe.
// com isso, terá apenas um atributo .forRoot() sendo que nas branches,
// serão usadas .forChild();
export class AppRoutingModule {
}
