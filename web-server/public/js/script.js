console.log('Client-side JS loaded...');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent = 'From JavaScript';

//
// Goal: Render contents to paragraphs
//
// 1. Select the second messge p from JavaScript
// 2. Just before fetch, render loading message and emmpty p
// 3. If error, render error
// 4. If no error, render location and forecast
// 5. Test your work! Search for errors and for valid locations

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    messageOne.textContent = 'loading...';
    messageTwo.textContent = '';

    const location = search.value;
    // console.log(location);

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error);
                messageOne.textContent = data.error;
            } else {
                // console.log(data.location);
                // console.log(data.forecast);
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});
