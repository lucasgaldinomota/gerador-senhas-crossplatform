import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tamanho-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tamanho-input.component.html',
})
export class TamanhoInputComponent {
  @Input() tamanho: number = 8;
  @Output() tamanhoChange: EventEmitter<number> = new EventEmitter<number>();

  onChange(value: number) {
    this.tamanho = value;
    this.tamanhoChange.emit(this.tamanho);
  }
}