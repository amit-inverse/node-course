const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    },
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing note');
    },
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        console.log('listing notes');
    },
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('reading note');
    },
});

yargs.argv;
