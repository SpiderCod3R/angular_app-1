import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogo_em_andamento: boolean = true
  public tipo_encerramento: string = ''

  public encerrarJogo(tipo:  string): void {
    this.jogo_em_andamento = false
    this.tipo_encerramento = tipo
  }

  public reiniciarJogo(): void {
    this.jogo_em_andamento = true
    this.tipo_encerramento = ''
  }
}
