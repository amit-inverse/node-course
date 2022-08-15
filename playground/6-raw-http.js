const http = require('http');

const url = 'http://api.weatherstack.com/current?access_key=14e9343be42b0248fa9dff9864edf870&query=40,-75&units=m';

const request = http.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString();
        // console.log(chunk);
    });

    response.on('end', () => {
        // console.log(data);
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error ', error);
});

request.end();
