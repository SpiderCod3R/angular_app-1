import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from 'src/app/shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number | undefined
  
  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes) 
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Tentativas Recebidas do Painel: ", this.tentativas)
  }

  ngOnInit(): void {
    
  }

}
