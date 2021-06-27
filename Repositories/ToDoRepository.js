const fs = require('fs');

const { ToDo } = require('../toDo');

//save
//findByID
//update
//delete

class ToDoRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Filename is required');
    }
    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  readFile() {
    try {
      const contents = JSON.parse(fs.readFileSync(this.filename));
      return contents;
    } catch (err) {
      throw new Error('Could not read the file');
    }
  }

  writeFile(toDo) {
    try {
      fs.writeFileSync(this.filename, JSON.stringify(toDo, null, 2));
    } catch (err) {
      throw new Error('Could not write the file');
    }
  }

  save(toDo) {
    //get the full to do list (readFile)
    const contents = this.readFile();
    //push the new object at the end
    contents.push(toDo);
    // write the to do (writeFile)
    this.writeFile(contents);
  }

  findByWord(word) {
    //get the full to do list (readFile)
    const contents = this.readFile();
    
    return contents.filter(({ title }) => {
        return title.includes(word);
    });
    // const results = [];
    // for(const content of contents) {
    //     if(content.title.includes(word)) {
    //         results.push(content);
    //     }
    // }
    // return results;
  }

  findByIndex(index) {
    const contents = this.readFile();

    return contents[index - 1];
  }

  update(index, newTitle) {
    const id = this.findByIndex(index).id;

    this.delete(index);
    
    const toDoUpdated = new ToDo(id, newTitle);

    this.save(toDoUpdated);
  }

  delete(index) {
    const contents = this.readFile();
    
    const deleteToDo = this.findByIndex(index);

    const results = [];
    for(const content of contents) {
        if(content.id !== deleteToDo.id) {
            results.push(content);
        }
    }

    this.writeFile(results);
  }
}

module.exports = {
  ToDoRepository,
};

// function filter(cb) {
//     const acc = [];
//     for(item of this) {
//         if(cb.apply(this, [item, index, this])){
//             acc.push(item);
//         };
//     }

//     return acc;
// }