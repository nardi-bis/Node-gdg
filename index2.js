// index.js
const _ = require('lodash');

// Example array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the maximum and minimum using Lodash functions
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

// Log the results
console.log(Max Number: ${maxNumber});
console.log(Min Number: ${minNumber});