const fs = require('fs');

const readCharquito = fs.createReadStream("./docs/file3.txt");
// const readCharquito = fs.createReadStream("./docs/file3.txt", { encoding: "utf8"});

const writeCharquito = fs.createWriteStream("./docs/file4.txt");

// stream code
readCharquito.on("data", (dataChunk) => {
    console.log("----NEW DATA CHUNK-----");
    console.log(dataChunk.toString());

    // passing data
    writeCharquito.write("\nNEW CHUNK\n");
    writeCharquito.write(dataChunk);
})

// piping code
// does the exact same thing as steams but with much less code
readCharquito.pipe(writeCharquito);