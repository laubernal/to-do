const crypto = require('crypto');

const readCommandArg = () => {
    //receive the command arg
    //catch from [2] to [].length
    //return string
    return process.argv.slice(2, process.argv.length).join(" ");
}

const uniqueId = () => {
    return crypto.randomBytes(4).toString('hex');
}

module.exports = {
    readCommandArg,
    uniqueId
}