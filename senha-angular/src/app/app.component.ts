import { Component } from '@angular/core';
import OpcaoCaractere from './core/OpcaoCaractere';
import Senha from './core/Senha';
import opcoesCaracteres from './core/OpcoesCaracteres';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tamanho: number = 8; // Tamanho padrão da senha
  tiposCaracteres: OpcaoCaractere[] = opcoesCaracteres; // Opções de caracteres
  senhasGeradas: string[] = []; // Lista de senhas geradas

  gerarSenha() {
    console.log('Tamanho da senha:', this.tamanho); // Log do tamanho da senha
    const senhaGerada = Senha.gerarSenha(this.tamanho, this.tiposCaracteres); // Geração da senha
    this.senhasGeradas.unshift(senhaGerada); // Adiciona a nova senha à lista

    // Limita a lista a 10 senhas
    if (this.senhasGeradas.length > 10) {
      this.senhasGeradas.pop();
    }
  }

  lidaComMudanca(index: number) {
    this.tiposCaracteres[index].valor = !this.tiposCaracteres[index].valor; // Alterna a seleção do tipo de caractere
  }

  // Novo método para lidar com a mudança de tamanho
  onTamanhoChange(novoTamanho: number) {
    this.tamanho = novoTamanho; // Atualiza o tamanho com o novo valor
    console.log('Tamanho da senha atualizado:', this.tamanho); // Log do tamanho atualizado
  }
}