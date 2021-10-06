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
  public resposta: string = ''
  
  public rodada: number= 0
  public rodadaFrase!: Frase

  public progresso: number= 0


  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')
      this.rodada++
      this.progresso += (100 / this.frases.length)
      console.log(this.progresso)
      this.atualizaRodada()
    } else {
      alert('A tradução está incorreta')
    }
  }

  public atualizaRodada(): void {
    // Define a base da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    // limpa a resposta
    this.resposta = ''
  }
}
