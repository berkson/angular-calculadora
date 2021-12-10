import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) {}

  // executado após a criação do objeto. consultas a banco de dados devem ser feitas aqui e não no canstrutor
  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa para os valores padrão
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiciona o número selecionado para o cálculo posterior.
   * @param numero string
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Trata o separador decimal e também retorna o número concatenado ex: 32
   * @param numAtual string
   * @param numConcat string
   * @returns
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    // caso contenha '0' ou null reinicia o valor
    if (numAtual === '0' || numAtual === null) numAtual = '';
    // primeiro dígito é ponto retorna '0.'
    if (numConcat === '.' && numAtual == '') return '0.';
    // se '.' for digitado e já contenha um '.' retorna o valor já existente
    if (numConcat === '.' && numAtual.indexOf('.') > -1) return numAtual;

    return numAtual + numConcat;
  }

  /**
   *
   * @param operacao string
   * @returns
   */
  definirOperacao(operacao: string): void {
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    // Se a operação está definida e o número dois também está efetua o cálculo
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * realiza o cálculo
   * @returns void
   */
  calcular(): void {
    if (this.numero2 === null) return;

    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  /**
   * Retorna o valor exibido  na tela da calculadora
   *
   * @returns string
   */
  get display(): string {
    if (this.resultado !== null) return this.resultado.toString();

    if (this.numero2 !== null) return this.numero2;

    return this.numero1;
  }
}
