import { Component, OnInit } from '@angular/core';
import { Coracao } from 'src/app/shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  // coracao_cheio:string="../assets/coracao_cheio.png"
  // coracao_vazio:string="../assets/coracao_vazio.png"
  
  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { console.log(this.coracoes) }

  ngOnInit(): void {
  }

}
