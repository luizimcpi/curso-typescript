import { Component } from '@angular/core';

/*O nome do arquivo é sempre em lowercase e o nome da classe é a concatenação do nome do Arquivo sem a extensão*/
@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <contatos-lista></contatos-lista>
    `
})
export class AppComponent{}