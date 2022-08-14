const validator = require('validator');
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(notes);

// console.log(validator.isEmail('amit@gmail.com'));
// console.log(validator.isEmail('amitgmail.com'));
// console.log(validator.isURL('https://teachyleaf.in'));
console.log(validator.isURL('https:teachyleaf.in'));
