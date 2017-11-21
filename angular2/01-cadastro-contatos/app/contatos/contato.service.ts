import { Injectable } from '@angular/core';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService {
    getContatos(): Promise<Contato[]> {
        return Promise.resolve(CONTATOS);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatoPorId(id);
    }

    private getContatoPorId(id: number) {
        return this.getContatos()
            .then((contatos: Contato[]) => {
                return contatos.find(contato => contato.id === id);
            });
    }

    //Simula uma conexão lenta
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        }).then(() => this.getContatos());
    }
}