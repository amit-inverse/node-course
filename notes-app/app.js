const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(notes);

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success" to the console in green
// 4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

console.log(chalk.green('Success'));
console.log(chalk.green.bold('Success'));
console.log(chalk.bold.green('Success'));
console.log(chalk.bold.blue.inverse('Success'));

const textBold = chalk.bold;
const textInversed = chalk.inverse;

console.log(textBold('Amit Kumar Das'));
console.log(textInversed('Amit Kumar Das'));
