import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'tamanho-input',
    templateUrl: './tamanho-input.component.html',
    styleUrls: ['./tamanho-input.component.css']
})
export class TamanhoInputComponent {
    @Input() tamanho: number = 8; // Valor padrão
    @Output() tamanhoChange: EventEmitter<number> = new EventEmitter<number>();

    onChange(value: number) {
        this.tamanho = value; // Atualiza o tamanho
        this.tamanhoChange.emit(this.tamanho); // Emite o valor atualizado
        console.log('Tamanho atualizado:', this.tamanho); // Log do valor atualizado
    }
}