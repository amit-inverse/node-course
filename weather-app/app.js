const request = require('request');

// const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=22.5726,88.3639&units=s';

// request({ url: url, json: true }, (error, response) => {
//     const temperature = response.body.current.temperature;
//     const feelslike = response.body.current.feelslike;
//     const weather_descriptions = response.body.current.weather_descriptions[0];

//     console.log(weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.');
// });

// Geocoding
// Address => lat/long => weather

//
// Goal: Print the lat/long for Los Angeles
//
// 1. Fire off a new request to the URL explored in browser
// 2. Have the request module parse it as JSON
// 3. Print both the latitude and longitude to the terminal
// 4. Test your work!

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGVhY2h5bGVhZiIsImEiOiJja3JkYnp1bjU0dWU2Mm9ueGI0dWc1Y2piIn0.uAMoTQst3fo5DLGb6xrOIA&limit=1';
request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].geometry.coordinates[1];
    const longitude = response.body.features[0].geometry.coordinates[0];

    console.log('Latitude : ' + latitude + ', Longitude : ' + longitude);
});
