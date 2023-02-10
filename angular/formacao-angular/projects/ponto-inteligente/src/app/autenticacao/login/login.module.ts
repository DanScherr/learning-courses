import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router' // README.ROUTING.7.3.
import { ReactiveFormsModule } from '@angular/forms'; // README.LOGIN.SCREEN.1.1.
import { HttpClientModule } from '@angular/common/http'; // README.LOGIN.SCREEN.1.2.

/** README.LOGIN.SCREEN.1.3.
 * Modulos do Angular Material utilizados para criar interface 
 */
import { MatInputModule } from '@angular/material/input'; // campos de entrada de dados
import { MatButtonModule } from '@angular/material/button'; // botoes
import { MatListModule } from '@angular/material/list'; // interface no formato de listas, colunas e linhas
import { MatTooltipModule } from '@angular/material/tooltip'; // informação ao passar o mouse
import { MatIconModule } from '@angular/material/icon'; // adc icones no html
import { MatSnackBarModule } from '@angular/material/snack-bar'; // msgs no formato snack-bar

import { FlexLayoutModule } from '@angular/flex-layout' // README.LOGIN.SCREEN.1.4. centralizar nossos componentes na tela

/** Componentes e Serviços */
import { LoginComponent, LogarComponent } from './components'; // README.LOGIN.2.2.2. + README.ROUTING.7.2.
import { LoginService } from './services'; // README.SERVICE.3.1.1.



@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent // README.ROUTING.7.2.
  ],
  imports: [
    CommonModule,
    RouterModule, // README.ROUTING.7.3.
    /** README.LOGIN.SCREEN.1.5. */
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ],
  providers: [ LoginService ] // README.SERVICE.3.1.2.
})
export class LoginModule { }
