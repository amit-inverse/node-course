console.log('Client-side JS loaded...');

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });

//
// Goal: Fetch weather!
//
// 1. Setup a call to fetch weather from Kolkata
// 2. Get the parse JSON response
//  - If error property, print error
//  - If no error property, print weather and forecast
// 3. Refresh the browser and test your work

fetch('http://localhost:3000/weather?address=kolkata').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    })
})