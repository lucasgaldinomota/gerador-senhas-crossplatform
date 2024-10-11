import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CheckboxComponent } from './components/checkbox.component';
import { TamanhoInputComponent } from './components/tamanho-input.component';
import { ExibeSenhaComponent } from './components/exibe-senha.component';
import { UltimasSenhasComponent } from './components/ultimas-senhas.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CheckboxComponent,
        TamanhoInputComponent,
        ExibeSenhaComponent,
        UltimasSenhasComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }