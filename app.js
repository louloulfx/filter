const fs = require('fs');

const files = fs.readdirSync('filters');

const config = import()

console.log('The filters are ' + files)

files.forEach(file => {
    console.log(file);

    try {
        const module = require(`./filters/${file}`);
        module();

    } catch (e) {
        // console.log(e)
        console.log(`${file} is invalid`)
    }
})
