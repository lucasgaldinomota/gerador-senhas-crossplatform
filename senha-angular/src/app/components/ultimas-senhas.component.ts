import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExibeSenhaComponent } from './exibe-senha.component';

@Component({
  selector: 'app-ultimas-senhas',
  standalone: true,
  imports: [CommonModule, ExibeSenhaComponent],
  templateUrl: './ultimas-senhas.component.html',
})
export class UltimasSenhasComponent {
  @Input() senhas: string[] = [];
}