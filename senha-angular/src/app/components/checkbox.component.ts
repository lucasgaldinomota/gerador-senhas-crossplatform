import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  template: `
    <div class="checkboxContainer">
      <input type="checkbox" [checked]="selecionado" (change)="toggleSelecionado()">
      <label>{{ texto }}</label>
    </div>
  `,
})

export class CheckboxComponent {
  @Input() texto: string = '';
  @Input() selecionado: boolean = false;
  @Output() lidaComMudanca = new EventEmitter<void>();

  toggleSelecionado() {
    this.lidaComMudanca.emit();
  }
}