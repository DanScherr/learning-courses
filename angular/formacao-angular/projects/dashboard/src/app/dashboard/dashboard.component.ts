import { Component, OnInit } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

import { DadosService } from './dados.service';

declare var google:any

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  private dados: any; // variavel local para armazenar dados

  constructor(private dadosService: DadosService) {} // injetar serviço no construtor

  ngOnInit() { // consumir dados do nosso service a partir do momento que o component for chamado
    this.dadosService.obterDados().subscribe( // nos subescrevemos para sermos notificados pelo observable do retorno dos dados
      dados => { // dados recebe
        this.dados = dados; // atribuo à minha variavel local os dados recebidos pelo observable
        this.init(); // gerar os gráficos
      }
    )
  }


  /** Inicializa a API de gráficos com delay de 1 segundo,
   * permitindo a integração com a API com o Angular.
   * 
   * @return void
   */
  init(): void {
    if(google.typeof !== 'undefined') {
      google.charts.load('current', {'packages': ['corechart']});
      setTimeout(() =>{
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
    throw new Error('Method not implemented.');
  }

  /** Exibir gráficos
   * 
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();
    
  }

  /** Exibe o gráfico Pie Chart
   * 
   * @return void
   */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart'); // obtem referencia por id, da div, o qual será obtido
    const chart = new google.visualization.PieChart(el); // criar instancia do gráfico

    chart.draw(this.obterDataTable(), this.obterOpcoes()); // desenha os dados e gráfico
    // como usaremos os mesmos dados várias vezes, criamos 2 métodos
  }

   /** Exibe o gráfico 3D Pie Chart
   * 
   * @return void
   */
   exibir3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart'); // obtem referencia por id, da div, o qual será obtido
    const chart = new google.visualization.PieChart(el); // criar instancia do gráfico
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes); // desenha os dados e gráfico
    // como usaremos os mesmos dados várias vezes, criamos 2 métodos
  }

  /** Exibe o gráfico Donut Chart
   * 
   * @return void
   */
  exibirDonutChart(): void {
    const el = document.getElementById('donut_chart'); // obtem referencia por id, da div, o qual será obtido
    const chart = new google.visualization.PieChart(el); // criar instancia do gráfico
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes); // desenha os dados e gráfico
    // como usaremos os mesmos dados várias vezes, criamos 2 métodos
  }

  /** Exibe o gráfico Bar Chart
   * 
   * @return void
   */
  exibirBarChart(): void {
    const el = document.getElementById('bar_chart'); // obtem referencia por id, da div, o qual será obtido
    const chart = new google.visualization.BarChart(el); // criar instancia do gráfico

    chart.draw(this.obterDataTable(), this.obterOpcoes()); // desenha os dados e gráfico
    // como usaremos os mesmos dados várias vezes, criamos 2 métodos
  }

  /** Exibe o gráfico Line Chart
   * 
   * @return void
   */
  exibirLineChart(): void {
    const el = document.getElementById('line_chart'); // obtem referencia por id, da div, o qual será obtido
    const chart = new google.visualization.LineChart(el); // criar instancia do gráfico

    chart.draw(this.obterDataTable(), this.obterOpcoes()); // desenha os dados e gráfico
    // como usaremos os mesmos dados várias vezes, criamos 2 métodos
  }

  /** Exibe o gráfico Column Chart
   * 
   * @return void
   */
  exibirColumnChart(): void {
    const el = document.getElementById('column_chart'); // obtem referencia por id, da div, o qual será obtido
    const chart = new google.visualization.ColumnChart(el); // criar instancia do gráfico

    chart.draw(this.obterDataTable(), this.obterOpcoes()); // desenha os dados e gráfico
    // como usaremos os mesmos dados várias vezes, criamos 2 métodos
  }


  /** Metodos de configuração do schema das tabelas */


  /**
   * Cria e retorna objeto DataTable da API de gráficos,
   * reponsável por definir os dados do gráfico
   * 
   * @returns any
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título,
   * tamanho e largura do gráfico
   * 
   * @returns any
   */
  obterOpcoes(): any{
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    };
  }



}

