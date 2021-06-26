const fs = require('fs');

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
      console.log(contents);
      return contents;
    } catch (err) {
      throw new Error('Could not read the file');
    }
  }

  writeFile(toDo) {
    try {
      fs.writeFileSync(this.filename, JSON.stringify(toDo, null, 2));
      console.log('File written successfully');
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

  update(id, newTitle) {
    //get the full to do list (readFile)
    //findById the to do you want to update (id received by arg)
    //modify the title of the to do object with the new title received by arg
    //writeFile
  }

  delete(id) {
    //get the full to do list (readFile)
    //findById the to do object you want to delete (id received by arg)
    //delete the to do object
    //get the full to do list (readFile)
    //writeFile
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