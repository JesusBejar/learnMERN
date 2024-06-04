// this file connects to the people.js
// below is an empty object?
const abc = require('./people')
console.log(abc);

// the module.exports in another file populates the object

// to log specific data within an object
console.log(abc.people);
console.log(abc.coolnesslevel);
// also
const { people, coolnesslevel} = require('./people')
console.log(people, coolnesslevel);

