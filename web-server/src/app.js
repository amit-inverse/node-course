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
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address term',
        });
    }

    res.send({
        forcast: 'Sunny',
        location: 'Kolkata',
        address: req.query.address,
    });
});

//
// Goal: Update weather endpoint to accept address
//
// 1. No address? Send back an error message
// 2. Address? Send back the static JSON
//  - Add address property onto JSON which return the provided address
// 3. Test /weather and /weather?address=philadelphia

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

//
// Goal: Create and render a 404 page with handlebars
//
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for both 404 rouothes
//  - Page not found
//  - Help article not found
// 4. Test your work. Visit /what and /help/units

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
