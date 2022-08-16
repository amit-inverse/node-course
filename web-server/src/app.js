const path = require('path');
const express = require('express');
const hbs = require('hbs');

//
// Goal: Create a partial for the footer
//
// 1. Setup the template for the footer partial "Created by Some Name"
// 2. Render the partial at the bottom of all these pages
// 3. Test your work by visiting all these pages

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Setup handelbar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

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

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Amit Kumar Das',
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
