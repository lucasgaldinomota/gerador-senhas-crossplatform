import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibeSenhaComponent } from './exibe-senha.component';

@Component({
  selector: 'app-ultimas-senhas',
  standalone: true,
  imports: [CommonModule, ExibeSenhaComponent],
  template: `
<div>
  <h2 class="mainTitle">Últimas Senhas Geradas:</h2>
    <ul class="ultimasList">
        <li *ngFor="let senha of senhas">
            <app-exibe-senha [senha]="senha"></app-exibe-senha>
        </li>
    </ul>
</div>
  `,
})

export class UltimasSenhasComponent {
  @Input() senhas: string[] = [];
}