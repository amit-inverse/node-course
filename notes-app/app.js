const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    handler: function () {
        console.log('adding note');
    },
});

// create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function () {
        console.log('removing note');
    },
});

// add, remove, read, list

//
// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder messge for now)
// 2. Setup command to support "read" command (print placeholder messge for now)
// 3. Test your work by running both commands and ensure correct output

// create list command
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function () {
        console.log('listing notes');
    },
});

// create read command
yargs.command({
    command: 'read',
    description: 'Reading a note',
    handler: function () {
        console.log('reading note');
    },
});

// console.log(process.argv);
console.log(yargs.argv);
