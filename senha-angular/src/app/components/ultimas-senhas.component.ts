import { Component, Input } from '@angular/core';
import { ExibeSenhaComponent } from './exibe-senha.component';

@Component({
  selector: 'app-ultimas-senhas',
  standalone: true,
  imports: [ExibeSenhaComponent],
  template: `
<div>
    <ul class="ultimasList">
        <li *ngFor="let senha of senhas">
            <app-exibe-senha [senha]="senha"></app-exibe-senha>
        </li>
    </ul>
</div>
  `,
})

export class UltimasSenhasComponent {
  constructor() {
    console.log(this.senhas)
  }

  @Input() senhas: string[] = [];
}