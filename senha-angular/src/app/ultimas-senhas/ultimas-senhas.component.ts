import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-ultimas-senhas',
    templateUrl: './ultimas-senhas.component.html',
    styleUrls: ['./ultimas-senhas.component.css']
})
export class UltimasSenhasComponent {
    @Input() senhas: string[] = [];
}