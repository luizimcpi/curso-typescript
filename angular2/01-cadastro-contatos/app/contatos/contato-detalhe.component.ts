import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { isPrimitive } from 'util';

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'
})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        //Será chamado sempre que ocorrer um clique em algum elemento da lista
        console.log('clicou em um elemento da lista de contatos');
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            //colocando o '+' na frente o retorno do params é convertido para numero
            let id: number = +params['id'];
            console.log('Consultando ID: ' + id);
            if (id) {
                this.isNew = false;
                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        console.log(contato);
                        this.contato = contato;
                    });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean):{}{
        return{
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean):{}{
        return{
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit(): void {
        if(this.isNew){
            console.log('Cadastrar Contato');
        }else{
            console.log('Alterar contato');
        }
        
    }

  
}