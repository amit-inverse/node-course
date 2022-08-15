const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=' + latitude + ',' + longitude + '&units=m';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location.', undefined);
        } else {
            temperature = response.body.current.temperature;
            feelslike = response.body.current.feelslike;
            weather_descriptions = response.body.current.weather_descriptions[0];
            callback(undefined, weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.');
        }
    });
};

module.exports = forecast;
