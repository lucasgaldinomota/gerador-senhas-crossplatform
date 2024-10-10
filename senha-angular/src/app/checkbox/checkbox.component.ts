import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
    @Input() texto: string = '';
    @Input() selecionado: boolean = false;
    @Output() lidaComMudanca = new EventEmitter<void>();

    toggleSelecionado() {
        this.lidaComMudanca.emit();
    }
}