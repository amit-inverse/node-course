// Object property shorthand

const name = 'Amit';
const userAge = 32;

// const user = {
//     name: name,
//     age: userAge,
//     location: 'Kolkata',
// };

const user = {
    name,
    age: userAge,
    location: 'Kolkata',
};

console.log(user);

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 332,
    salePrice: undefined,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock = 100, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

// const transaction = (type, myProduct) => {
//     const { label } = myProduct;
// };

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock);
};

transaction('order', product);
transaction('order');
