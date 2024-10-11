import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exibe-senha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exibe-senha.component.html',
})
export class ExibeSenhaComponent {
  @Input() senha: string = '';
  mostrarAviso: boolean = false;

  copiar() {
    navigator.clipboard.writeText(this.senha).then(() => {
      this.mostrarAviso = true;
      setTimeout(() => {
        this.mostrarAviso = false;
      }, 2000);
    }).catch(err => {
      console.error('Erro ao copiar a senha: ', err);
    });
  }
}