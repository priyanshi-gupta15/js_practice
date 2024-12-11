//que =>Filtering Array with Callback: Write a function filterArray that takes an array of numbers and a callback function. The function should return a new array containing only the numbers that pass the condition defined in the callback. Test it with a callback that filters out numbers less than 5.

function filterArray(array, callback) {
    return array.filter(callback);
}

// Callback function to filter numbers less than 5
function isGreaterThanFive(number) {
    return number >= 5;
}

// Test the filterArray function
const numbers = [1, 3, 5, 7, 9, 2, 4, 6];
const result = filterArray(numbers, isGreaterThanFive);
console.log(result); // Output: [5, 7, 9, 6]

