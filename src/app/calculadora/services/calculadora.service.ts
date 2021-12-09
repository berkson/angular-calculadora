/**
 * Serviço responsável por executar operações da calculadora
 * 
 * @author berkson ximenes
 * @since 1.0.0
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas para identificar cada operação */
  static readonly SUBTRACAO: string = '-';
  static readonly SOMA: string = '+';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado dois números.
   * Suporta as 4 operações básicas
   * @param num1 number
   * @param num2 number
   * @param operacao string Referente a operação matemática
   * @returns number Resultado da operação
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
