#!/usr/bin/env node

const { ToDoRepository } = require('./Repositories/ToDoRepository');
const { TO_DO_JSON } = require('./constants');

class Delete {
    constructor() {
        this.toDoRepo = new ToDoRepository(TO_DO_JSON);

        this.toDoRepo.delete(process.argv[2]);
    }
}

new Delete();