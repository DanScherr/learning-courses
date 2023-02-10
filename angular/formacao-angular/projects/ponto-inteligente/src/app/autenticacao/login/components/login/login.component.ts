import { Component, OnInit } from '@angular/core';
/** README.LOGIN.SCREEN.2. */
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // relacionados a formulario
import { Router } from '@angular/router'; // serviço para direcionar tela de login
import { MatSnackBar } from '@angular/material/snack-bar'; // msgs de erro e sucesso na tela

import { Login } from '../../models' // README.LOGIN.MODEL.1.5.
import { LoginService } from '../../services'; // README.SERVICE.3.2.1.

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup; // README.LOGIN.SCREEN.2.1. -> referenciar form

  /** README.LOGIN.SCREEN.2.2. */
  constructor(
    private fb: FormBuilder, // seviço utilitário a forms
    private snackBar: MatSnackBar, // exibir msgs de erro e sucesso na tela
    private router: Router, // rede de redirecionamento
    private loginService: LoginService // README.SERVICE.3.2.2.
  ) {}

  /** README.LOGIN.SCREEN.2.3. */
  ngOnInit() { // quando component for carregado
    this.gerarForm(); // gerar formulário
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // primeiro campo de texto
      senha: ['', [Validators.required, Validators.minLength(6)]] // segundo campo de texto
    });
  }

  logar() {
    if (this.form.invalid) { // se esse método for invalido ao clicar no botao logar
      return;
    }
    const login: Login = this.form.value; // README.LOGIN.MODEL.1.6.
    // alert(JSON.stringify(this.form.value)) // caso contrário, receberá um alerta exibindo os dados do formulário
    // alert(JSON.stringify(login)) // mesma coisa que de cima acessando pelo componente
    // alert('Email: ' + login.email + ', senha: ' + login.senha) // usando dados dentro da nosso classe no Model

    /** README.SERVICE.3.2.3. */
    this.loginService.logar(login)
      .subscribe( // METODO DE ESCUTA
        /** caso de sucesso */
        data => { // retorno do servidor
          console.log(JSON.stringify(data))
          localStorage['token'] = data['data']['token']; // armazenar token no localStorage do navegador
          const usuarioData = JSON.parse(
            atob(data['data']['token'].split('.')[1]));
          if (usuarioData['role'] == 'ROLE_ADMIN') { // se usuario admin
            this.router.navigate(['/admin']); // navega para pagina de admin
          } else {
            this.router.navigate(['/funcionario']); // navega para pag de funcionario
          }
        },
        /** caso de erro */
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err['status'] == 401) {
            msg = "Email/senha inválido(s)."
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
    
  }
}
