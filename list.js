#!/usr/bin/env node

// const fs = require('fs');

const { ToDoRepository } = require('./Repositories/ToDoRepository');

class List {
    constructor(filename) {
        this.toDoRepo = new ToDoRepository(filename);

        this.toDoRepo.readFile();
    }
}

new List('to-do.json');






















// class ListToDo {
//     constructor(filename) {
//         if(!filename) {
//             throw new Error('Filename is required');
//         }

//         this.filename = filename;

//         try {
//             fs.accessSync(this.filename);
//         } catch(err) {
//             fs.writeFileSync(this.filename, '[]');
//         }
//     }

//     async getAll() {
//         return JSON.parse(await fs.promises.readFile(this.filename));
//     }

//     // async add(text) {
//     //     const records = await this.getAll();
//     //     records.push(text);

//     //     await fs.promises.writeFile(this.filename, text);
//     // }
// }

// const test = async () => {
//     const toDo = new ListToDo('to-do.json');

//     // await toDo.add(process.argv[2]);

//     const listed = await toDo.getAll();

//     console.log(listed);
// }

// test();

// module.exports.ListToDo = ListToDo;