import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  /** Dados estáticos para esse caso */
  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => { // instanciar
      observable.next(this.dados); // como está sempre em escuta, o .next serve para notificar tudo que é escutado
      observable.complete(); // notificar os subinscritos que o observable já notificou e q n precisa ficar mais na escuta
    });
  }
}
