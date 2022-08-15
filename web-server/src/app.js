const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Amit',
            age: 32,
        },
        {
            name: 'Rebecca',
        },
    ]);
});

//
// Goal: Update routes
//
// 1. SetUP about route to render a title with HTML
// 2. Setup weather route to send back JSON
//  - Object with forecast and location string
// 3. Test your work by visiting both in the browser

app.get('/about', (req, res) => {
    res.send('<h1>about page</h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'Sunny',
        location: 'Kolkata',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
