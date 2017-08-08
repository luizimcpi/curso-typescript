"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("./../aula07-classes/animal");
/*
    Compilar utilizando Ctrl + Shift + B
    Para Rodar digitar no terminal node run ou node run.js
*/
var dao = new animal_dao_1.AnimalDao();
var animal = new animal_1.Animal('Rex');
dao.insert(animal);
//# sourceMappingURL=run.js.map