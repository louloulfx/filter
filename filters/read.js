module.exports = (input) => {
    if (input) {
        const fs = require('fs');
        return fs.readFileSync(input, "utf8");
    } else {
        throw new Error('No file name')
    }
}
