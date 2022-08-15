const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=22.5726,88.3639&units=s';

request({ url: url, json: true }, (error, response) => {
    // // console.log(response);

    // const data = JSON.parse(response.body);
    // // console.log(data);
    // console.log(data.current);

    // console.log(response.body.current);

    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const weather_descriptions = response.body.current.weather_descriptions[0];
    console.log(weather_descriptions + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.');
});

//
// Goal: Print a small forcast to the user
//
// 1. Print: "It is currently 28 degrees out. It feels like 31 degrees out."
// 2. Test your work!
