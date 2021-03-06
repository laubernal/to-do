#!/usr/bin/env node

const { ToDoRepository } = require('./Repositories/ToDoRepository');
const { TO_DO_JSON } = require('./constants');

class List {
    constructor() {
        this.toDoRepo = new ToDoRepository(TO_DO_JSON);
        
        console.log(this.toDoRepo.readFile());
    }
}

new List();