export class Coracao {
  constructor(
    public cheio:boolean, 
    public url_coracao_cheio:string="../assets/coracao_cheio.png",
    public url_coracao_vazio:string="../assets/coracao_vazio.png") { }

  public exibe_coracao(): string {
    if (this.cheio) {
      return this.url_coracao_cheio
    } else {
      return this.url_coracao_vazio
    }
  }
}