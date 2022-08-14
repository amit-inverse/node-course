const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize yargs version
yargs.version('1.1.0');

//
// Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required, and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

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
        // console.log('adding note', argv);
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
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
