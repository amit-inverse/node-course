const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address term',
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return res.send({ error });
            }

            res.send({
                forcast: forcastData,
                location,
                address: req.query.address,
            });
        });
    });
});

//
// Goal: Wire up /weather
//
// 1. Rewrite geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates to get forecast
// 4. Send back the real forecast and location

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term',
        });
    }

    // console.log(req.query);
    console.log(req.query.search);
    res.send({
        products: {},
    });
});

app.get('/help/*', (req, res) => {
    // res.send('Help article not found.');
    res.render('404', {
        title: '404',
        name: 'Amit Kumar Das',
        message: 'Help article not found.',
    });
});

app.get('*', (req, res) => {
    // res.send('My 404 page.');
    res.render('404', {
        title: '404',
        name: 'Amit Kumar Das',
        message: 'Page not found.',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
