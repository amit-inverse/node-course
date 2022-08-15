const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=37.8267,-122.4233z';

request({ url: url }, (error, response) => {
    // console.log(response);

    const data = JSON.parse(response.body);
    // console.log(data);
    console.log(data.current);
});
