#!/usr/bin/env node

const { ToDoRepository } = require('./Repositories/ToDoRepository');
const { readCommandArg } = require('./utils');
const { TO_DO_JSON } = require('./constants');

class Find {
    constructor() {
        this.toDoRepo = new ToDoRepository(TO_DO_JSON);

        const toDoFound = this.toDoRepo.findByWord(readCommandArg());
        console.log(toDoFound);
    }
}

new Find();