const path = require('path');
const express = require('express');

const app = express();

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Setup handelbar engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

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
