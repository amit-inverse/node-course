const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//
// Goal: Refactor all functions
//
// 1. If function is a method, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work!

// customize yargs version
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    },
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        console.log('listing notes');
    },
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler() {
        console.log('reading note');
    },
});

yargs.argv;
