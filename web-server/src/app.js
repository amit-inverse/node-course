const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

//
// Goal: Create two more HTML files
//
// 1. Create a HTML page for about with "About" title
// 2. Create a HTML page for help with "Help" title
// 3. Remove the old route handlers for both
// 4. Visit both in the browser to test your work

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: 'Amit',
//             age: 32,
//         },
//         {
//             name: 'Rebecca',
//         },
//     ]);
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>about page</h1>');
// });

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'Sunny',
        location: 'Kolkata',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});
