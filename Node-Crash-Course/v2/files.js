// file system - core module
const fs = require('fs');

// read files
// parameters = path, callback function
// REMEMBER TO UNCOMMENT----------------------------------------------------------------------------------
// fs.readFile("./docs/file.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     // below logs buffer (a package of data)
//     console.log(data);
//     // add .to String function to translate buffer
//     console.log(data.toString());

// })

// write files
// parameters = path, message, callback function
// REMEMBER TO UNCOMMENT----------------------------------------------------------------------------------

fs.writeFile("./docs/file.txt", "hola mundo", () => {
    console.log("file was written");
})
// if file path doesn't exist, file is created
fs.writeFile("./docs/file2.txt", "hola mundo otra vez", () => {
    console.log("file was written");
})

// delete files

// directories

