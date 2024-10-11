import { Component } from '@angular/core';
import OpcaoCaractere from '../../../core/OpcaoCaractere';
import Senha from '../../../core/Senha';
import opcoesCaracteres from '../../../core/OpcoesCaracteres';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  tamanho: number = 8;
  tiposCaracteres: OpcaoCaractere[] = opcoesCaracteres;
  senhasGeradas: string[] = [];

  gerarSenha() {
    const senhaGerada = Senha.gerarSenha(this.tamanho, this.tiposCaracteres);
    this.senhasGeradas = [senhaGerada, ...this.senhasGeradas];

    if (this.senhasGeradas.length > 10) {
      this.senhasGeradas.pop();
    }
  }

  lidaComMudanca(index: number) {
    this.tiposCaracteres[index].valor = !this.tiposCaracteres[index].valor;
  }

  onTamanhoChange(novoTamanho: number) {
    this.tamanho = novoTamanho;
  }
}