// file system - core module
const fs = require('fs');

// read files
fs.readFile("./docs/file.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})

// write files

// delete files

// directories