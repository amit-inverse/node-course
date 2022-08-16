const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Amit Kumar Das',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Amit Kumar Das',
    });
});

//
// Goal: Create a template for the help page
//
// 1. Setup a help template to render a help message to the screen
// 2. Setup the help route and render the template with an example message
// 3. Visit the route in the browser and see your help message print

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'This is some message.',
    });
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
