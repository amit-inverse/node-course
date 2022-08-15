const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//
// Goal: Use both destructuring and property shorthand in weather app
//
// 1. Use destructuring in app.js, forcast.js, and geocode.js
// 2. Use property shorthand in forcast.js, and geocode.js
// 3. Test your work and ensure app still works

if (!process.argv[2]) {
    console.log('Please provide a location.');
} else {
    geocode(process.argv[2], (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forcastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forcastData);
        });
    });
}
