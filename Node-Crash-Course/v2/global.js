//global object
// console.log(global);

global.setTimeout(() => {
    console.log("if he dies, he dies")
    clearInterval(int);
}, 4000);

const int = setInterval(() => {
    console.log("interval time")
}, 1000);

// directory paths
console.log(__dirname);
console.log(__filename);

