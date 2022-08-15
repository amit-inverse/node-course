const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=22.5726,88.3639&units=s';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather services.');
//     } else if (response.body.error) {
//         console.log('Unable to find location.');
//     } else {
//         const temperature = response.body.current.temperature;
//         const feelslike = response.body.current.feelslike;
//         const weather_descriptions = response.body.current.weather_descriptions[0];

//         console.log(weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.');
//     }
// });

geocode('Kolkata', (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
});

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(22.572672, 88.363881, (error, data) => {
    console.log('Error: ', error);
    console.log('Data: ', data);
});
