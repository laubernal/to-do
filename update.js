#!/usr/bin/env node

const { ToDoRepository } = require('./Repositories/ToDoRepository');
const { readCommandArg } = require('./utils');
const { TO_DO_JSON } = require('./constants');

class Update {
    constructor() {
        this.toDoRepo = new ToDoRepository(TO_DO_JSON);

        this.toDoRepo.update(process.argv[2], readCommandArg(3));
    }
}

new Update();