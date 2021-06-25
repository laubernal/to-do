const fs = require('fs');


//save
//findByID
//update
//delete

class ToDoRepository {
    constructor(filename) {
        if(!filename) {
            throw new Error('Filename is required');
        }
        this.filename = filename;
        
        try {
            fs.accessSync(this.filename);
        } catch(err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }

    readFile() {
        fs.readFile(this.filename, (err, data) => {
            if (err) {
                throw new Error('Could not read the file')
            }

            console.log(JSON.parse(data));
            
        });
    }

    writeFile(toDo) {
        fs.writeFile(this.filename, JSON.stringify(toDo, null, 2), (err) => {
            if (err) {
                throw new Error('Could not write the file')
            }
                
            console.log('File written successfully');
            
        })
    }
}

module.exports = {
    ToDoRepository
}