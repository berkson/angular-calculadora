import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5', () => {
    let soma = service.calcular(1, 4, "+");
    expect(soma).toEqual(5);
  });

  it('deve garantir que 100 / 4 = 25', () => {
      let resultado = service.calcular(100, 4, "/");
      expect(resultado).toEqual(25);
    });

  it('deve garantir que 1 - 4 = -3', () => {
    let resultado = service.calcular(1, 4, "-");
    expect(resultado).toEqual(-3);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    let resultado = service.calcular(1, 4, "*");
    expect(resultado).toEqual(4);
  });

  it('deve retornar 0 para operação inválida', () => {
    let resultado = service.calcular(1, 4, ",");
    expect(resultado).toEqual(0);
  });
});
