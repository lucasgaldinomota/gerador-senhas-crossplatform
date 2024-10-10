import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-exibe-senha',
    templateUrl: './exibe-senha.component.html',
    styleUrls: ['./exibe-senha.component.css']
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