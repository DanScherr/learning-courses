import { NgModule } from '@angular/core' // README.ROUTING.8.
import { Routes, RouterModule } from '@angular/router' // README.ROUTING.8.

import { LoginComponent, LogarComponent } from './components';

/** README.ROUTING.8. */
export const LoginRoutes: Routes = [
    { 
    path: 'login',  // path relativo. é o que configuramos para redirecionar do app.module
    component: LogarComponent, // path está associado ao LogarComponent que somente tem o router outlet
    children: [{ path: '', component: LoginComponent }] // e que esse component, LogarComponent,
    // possui alguns filhos, que no caso é o LoginComponent no path ''
    // ou seja, ao acessar a url: localhost, redirecionará ao /login/ que possui o filho
    // path vazio que irá carregar os dados de LoginComponent dentro dele
    }
];

/** README.ROUTING.8. */
@NgModule({ // classe do tipo @NgModule
    imports: [ RouterModule.forChild(LoginRoutes) ], // importando as rotas
    exports: [ RouterModule ] // exportando
})
export class LoginRoutingModule {
}