#!/usr/bin/env node

const { ToDoRepository } = require('./Repositories/ToDoRepository');
const { ToDo } = require('./toDo');
const { readCommandArg, uniqueId } = require('./utils');
const { TO_DO_JSON } = require('./constants');

class Add {
    constructor(){
        this.toDoRepo = new ToDoRepository(TO_DO_JSON);
        this.toDo = new ToDo(uniqueId(), readCommandArg());

        this.toDoRepo.save(this.toDo);
    }
}

new Add();


// class Foo {
//     name = 'gola'
//     constructor(){}
//     add() {
//         this.name
//     }
// }