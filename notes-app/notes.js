const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    // console.log(duplicateNote);
    // console.log(notes);
    // debugger;

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
        console.log(chalk.green.inverse('New note added.'));
    } else {
        console.log(chalk.red.inverse('Oops! Note title taken.'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note) => note.title !== title);

    if (newNotes.length === notes.length) {
        console.log(chalk.red.inverse('Oops! Note not found.'));
    } else {
        saveNotes(newNotes);
        console.log(chalk.green.inverse(title + ' -- note removed.'));
    }
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes...'));
    notes.forEach((note) => console.log(' - ' + note.title));
};

const readNote = (title) => {
    const notes = loadNotes();
    myNote = notes.find((note) => note.title === title);
    if (myNote) {
        console.log(chalk.yellow.bold(myNote.title));
        console.log(' - ' + myNote.body);
    } else {
        console.log(chalk.red.inverse('Note not found.'));
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = { addNote: addNote, removeNote: removeNote, listNotes: listNotes, readNote: readNote };
