import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        //Será chamado sempre que ocorrer um clique em algum elemento da lista
        console.log('clicou em um elemento da lista de contatos');
        this.route.params.forEach((params: Params) => {
            //colocando o '+' na frente o retorno do params é convertido para numero
            let id: number = +params['id'];
            console.log('Consultando ID: ' + id);
        });
    }
}