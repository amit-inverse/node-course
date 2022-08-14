const fs = require('fs');

// // const book = {
// //     title: 'Gitanjali',
// //     author: 'Rabindranath Tagore',
// // };

// // const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);
// // // console.log(bookJSON.title);

// // const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData.author);

// // fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// // console.log(dataBuffer);
// // console.log(dataBuffer.toString());

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Elina';
data.age = 16;
console.log(data.name);
console.log(data.age);

const data2 = JSON.stringify(data);

fs.writeFileSync('1-json.json', data2);
