const crypto = require('crypto');

const readCommandArg = (index = 2) => {
    //receive the command arg
    //catch from [2] to [].length
    //return string
    return process.argv.slice(index, process.argv.length).join(" ");
}

const uniqueId = () => {
    return crypto.randomBytes(4).toString('hex');
}

module.exports = {
    readCommandArg,
    uniqueId
}