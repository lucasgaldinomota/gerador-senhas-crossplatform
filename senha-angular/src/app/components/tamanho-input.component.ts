import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tamanho-input',
  standalone: true,
  imports: [FormsModule],
  template: `
<div class="inputContainer">
    <label class="inputLabel" for="tamanho">Tamanho da Senha:</label>
    <input class="inputNumber" type="number" id="tamanho" [(ngModel)]="tamanho" (input)="onChange(tamanho)" min="1" />
</div>
  `,
})


export class TamanhoInputComponent {
  @Input() tamanho: number = 8;
  @Output() tamanhoChange: EventEmitter<number> = new EventEmitter<number>();

  onChange(value: number) {
    this.tamanho = value;
    this.tamanhoChange.emit(this.tamanho);
  }
}