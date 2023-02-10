import { TestBed, inject } from '@angular/core/testing';
 
import { CalculadoraService } from './calculadora.service';
 
describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });
 
  it('should ...', inject([CalculadoraService], 
    (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));
 
  it('deve garantir que 1 + 4 = 5', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SUM);
      expect(soma).toEqual(5);
    })
  );
 
  it('deve garantir que 1 - 4 = -3', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACTION);
      expect(subtracao).toEqual(-3);
    })
  );
 
  it('deve garantir que 1 / 4 = 0.25', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISION);
      expect(divisao).toEqual(0.25);
    })
  );
 
  it('deve garantir que 1 * 4 = 4', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLY);
      expect(multiplicacao).toEqual(4);
    })
  );
 
  it('deve retornar 0 para operação inválida', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  );
});
