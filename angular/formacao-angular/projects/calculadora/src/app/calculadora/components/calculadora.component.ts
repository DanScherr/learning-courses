import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  // define atributes, private scope
  private number1: string;
  private number2: string;
  private result: number;
  private operation: string;

  constructor ( private claculadoraService: CalculadoraService ) { }

  ngOnInit(): void {
    this.clear();
  }

  /**
   * Iniciates every operators for the default values
   * 
   * @return void
   */
  clear(): void{
    this.number1 = '0'; // it'll be displayed
    this.number2 = null;
    this.result = null;
    this.operation = null;
  }

  /**
   *  Add selected number for the posterior calculus
   * @param string number
   * @return void
   */
  addNumber(number: string): void {
    if (this.operation == null) {
      this.number1 = this.concatNumber(this.number1, number);
    } else {
      this.number2 = this.concatNumber(this.number2, number);
    }
  }

  /**
   * Returns concat number and treats decimal separator.
   * @param currentNum string
   * @param concatNum string
   * @returns string
   */
  concatNumber(currentNum: string, concatNum: string): string {
    // in case only contains '0' or null, restart value
    if (currentNum == '0' || currentNum == null) {
      currentNum = '';
    }
    // first digit is 0, concat '.' before number
    if (concatNum === '.' && currentNum === '') {
      return '0.';
    }
    // in case '.' typed and it alredy contains a '.', just returns number
    if (concatNum == '.' && currentNum.indexOf('.') > -1) {
      return currentNum;
    }
    
    return currentNum + concatNum
  }

  /**
   * Executes the operational logic when operator is selected
   * In case ther's already a selected operation, executes
   * the previous one and defines a new one
   * @param operation 
   * @returns 
   */
  defineOperation(operation: string): void {
    // defines operation if there's none
    if (this.operation === null) {
      this.operation = operation;
      return;
    }
    // if operation defines number 2, it calculates it
    if (this.number2 !== null) {
      this.result = this.claculadoraService.calcular(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operation);
      this.operation = operation;
      this.number1 = this.result.toString();
      this. number2 = null;
      this.result = null;
    }
  }

  /**
   * Executes operational calculus
   * @returns 
   */
  calculate (): void {
    if (this.number2 == null) {
      return;
    }

    this.result = this.claculadoraService.calcular(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operation);
  }

  /**
   * Return value to be exhibit on screen
   * @return string
   */
  get display(): string {
    console.log('resultado='+this.result)
    console.log('numero2='+this.number2)
    if (this.result !== null) {
      return this.result.toString();
    }
    if (this.number2 !== null) {
      return this.number2;
    }
    return this.number1
  }

}
