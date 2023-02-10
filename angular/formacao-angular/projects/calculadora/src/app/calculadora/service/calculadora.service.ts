/**
 * Service responsable to execute calculator's operations
 * @author Daniel Scheicher<daniel.scheicher.profissional@gmail.com>
 * @since 1.0.0 -> versão
 */

import { Injectable } from '@angular/core';

@Injectable({ // declares that this service should be created
  providedIn: 'root' // allows injecting it into other classes in the application
})
export class CalculadoraService {

  /** Define constant to identify calculos operations 
   * - readonly -> what defines it as constant
   * - it'll stay the value atributed during the all application
   * - CAPSLOCK -> good practice
  */
 /** static -> facilitates the use of the constant
  * - no need to create an instance
  */
  static readonly SUM: string = '+';
  static readonly SUBTRACTION: string = '-';
  static readonly DIVISION: string = '/';
  static readonly MULTIPLY: string = '*';

  constructor() { }

  /** Method that calculates operational math with two parameters 
   * 
   * @param num1 number
   * @param num2 number
   * @param operation string Operation to be executed
   * @return number. result of operation
  */
  calcular(num1: number, num2: number, operation: string): number {
    let result: number; // gets the result of operation
    // let creates a local variable. local escope. it'll not be seing in other methods

    switch(operation) {
      case CalculadoraService.SUM:
        result = num1 + num2;
      break
      case CalculadoraService.SUBTRACTION:
        result = num1 - num2;
      break;
      case CalculadoraService.DIVISION:
        result = num1 / num2;
      break;
      case CalculadoraService.MULTIPLY:
        result = num1 * num2;
      break;
      default:
        result = 0;
    }

    return result;
  }

}
