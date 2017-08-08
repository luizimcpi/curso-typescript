import { DaoInterface } from './dao-interface';
import { AnimalDao } from './animal-dao';
import { Animal } from './../aula07-classes/animal';

/*
    Compilar utilizando Ctrl + Shift + B
    Para Rodar digitar no terminal node run ou node run.js
*/
let dao: DaoInterface = new AnimalDao();
let animal : Animal = new Animal('Rex');

dao.insert(animal);