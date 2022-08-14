const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//
// Goal: Write up list command
//
// 1. Create and export listNotes from notes.js
//  - "Your notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from command handler
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
        notes.listNotes();
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
