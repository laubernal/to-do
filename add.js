#!/usr/bin/env node

const { ToDoRepository } = require('./Repositories/ToDoRepository');
const { ToDo } = require('./toDo');

class Add {
    constructor(filename){
        this.toDoRepo = new ToDoRepository(filename);
        this.toDo = new ToDo('1', 'Hola');

        this.toDoRepo.writeFile(this.toDo);
    }
}

new Add('to-do.json');


// class Foo {
//     name = 'gola'
//     constructor(){}
//     add() {
//         this.name
//     }
// }