const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

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
