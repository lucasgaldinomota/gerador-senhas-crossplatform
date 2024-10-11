import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {
  @Input() texto: string = '';
  @Input() selecionado: boolean = false;
  @Output() lidaComMudanca = new EventEmitter<void>();

  toggleSelecionado() {
    this.lidaComMudanca.emit();
  }
}