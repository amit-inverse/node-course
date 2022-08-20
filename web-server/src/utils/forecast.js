const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=' + latitude + ',' + longitude + '&units=m';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined);
        } else if (body.error) {
            callback('Unable to find location.', undefined);
        } else {
            temperature = body.current.temperature;
            feelslike = body.current.feelslike;
            weather_descriptions = body.current.weather_descriptions[0];
            callback(undefined, weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.');
        }
    });
};

module.exports = forecast;
