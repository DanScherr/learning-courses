import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Configurando Angular Materials */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // README-INTRO 1.1.
import { MatButtonModule } from '@angular/material/button'; // README-INTRO 1.2.

/** Configurando imports de dependências da aplicacao */
import { AppComponent } from './app.component';
// import { LoginModule } from './autenticacao/login/login.module'; // README.LOGIN.1.2.
import { LoginModule, LoginRoutingModule } from './autenticacao'; // README.LOGIN.1.3.3. + README.ROTA.9.
import { AppRoutingModule } from './app-routing.module'; // README.ROTA.5.


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // README-INTRO 1.3.
    MatButtonModule, // README-INTRO 1.3.
    LoginModule, // README.LOGIN.1.3.
    LoginRoutingModule, // README.ROTA.9.1.

    AppRoutingModule // README.ROTA.5.1. // deve ser sempre o último
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
