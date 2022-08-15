const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//
// Goal: Accept location via command line argument
//
// 1. Access the command line arguments without yargs
// 2. Use the string value as the input for geocode
// 3. Only geocode if a location was provided
// 4. Test your work with a couple locations

if (!process.argv[2]) {
    console.log('Please provide a location.');
} else {
    geocode(process.argv[2], (error, data) => {
        if (error) {
            return console.log(error);
        }

        // console.log('Error: ', error);
        // console.log('Data: ', data);

        forecast(data.latitude, data.longitude, (error, forcastData) => {
            if (error) {
                return console.log(error);
            }

            // console.log('Error: ', error);
            // console.log('Data: ', data);

            console.log(data.location);
            console.log(forcastData);
        });
    });
}
