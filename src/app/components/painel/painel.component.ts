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
  public resposta!: string
  
  public rodada: number= 0
  public rodadaFrase!: Frase


  constructor() { 
    this.rodadaFrase = this.frases[this.rodada]
    
    console.log(this.rodadaFrase) 
  
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log('Verificar Resposta: ' + this.resposta)
  }

}
