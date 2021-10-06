import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogo_em_andamento: boolean = true

  public encerrarJogo(tipo:  string): void {
    console.log(tipo);
    this.jogo_em_andamento = false
  }
}
