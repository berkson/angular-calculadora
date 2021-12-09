import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private calculadoraService: CalculadoraService) { }

  // executado após a criação do objeto. consultas a banco de dados devem ser feitas aqui e não no canstrutor
  ngOnInit(): void {
  }

}
