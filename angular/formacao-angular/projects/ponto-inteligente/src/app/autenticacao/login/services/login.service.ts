import { Injectable } from '@angular/core'; // injetar serviço
import { Observable } from 'rxjs'; // acessar api externa de forma assincrona (nao vai bloquear applicacao). fica em modo de escuta
import { HttpClient } from '@angular/common/http'; // modulo responsavel pelo acesso http para api externa
import { environment as env } from '../../../../environment/environment';

import { Login } from '../'; // importa modulo de Login onde estão armazenado email e senha

@Injectable()
export class LoginService {

  private readonly PATH: string = 'auth'; // constante PATH que contem o valor auth. local onde iremos fazer o post de autenticacao

  constructor(private http: HttpClient) { } // instaciar objeto da classe HttpCLient

  /** definindo método */
  logar(login: Login): Observable<any> { // retorna um observable
 	return this.http.post(env.baseUrl + this.PATH, login); // executa requisição à api com path e login de pacote.
  }

}