import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/shared/frase.model';
import { FRASE } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] =FRASE
  public instrucao: string = 'Traduça a frase:'
  
  constructor() { console.log(this.frases) }

  ngOnInit(): void {
  }

  public atualizaResposta(): void {
    console.log('teste')
  }

}
