const express = require('express');

const app = express();

// app.com
// app.com/help
// app.com/about

app.get('', (req, res) => {
    res.send('hello express!');
});

app.get('/help', (req, res) => {
    res.send('help page');
});

//
// Goal: Setup two new routes
//
// 1. Setup an about route and render a page title
// 2. Setup a weather route and render a page title
// 3. Test your work by visiting both in the browser

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/weather', (req, res) => {
    res.send('weather page');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
