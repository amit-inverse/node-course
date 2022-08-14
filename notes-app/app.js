const chalk = require('chalk');
const getNotes = require('./notes.js');

// const notes = getNotes();
// console.log(notes);

// console.log(chalk.green('Success'));

console.log(process.argv);
// console.log(process.argv[2]);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding note...');
} else if (command === 'remove') {
    console.log('Removing note...');
}
