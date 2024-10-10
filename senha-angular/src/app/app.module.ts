import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TamanhoInputComponent } from './tamanho-input/tamanho-input.component';
import { ExibeSenhaComponent } from './exibe-senha/exibe-senha.component';
import { UltimasSenhasComponent } from './ultimas-senhas/ultimas-senhas.component';

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
        TamanhoInputComponent,
        ExibeSenhaComponent,
        UltimasSenhasComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }