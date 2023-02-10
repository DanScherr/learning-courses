import { Component} from '@angular/core'

/** README.ROTA.7. */
@Component({
    template: '<router-outlet></router-outlet>' // é possível adicionar estruturas que serão válidas para todas as telas
    // por exemplo, adicionando título <h1>Login</h1>
    // essa informação seria válida para todos os filhos deste component
    // como um template mesmo.
})
export class LogarComponent {
}
