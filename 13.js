//que=> Use filter to create an array of only the positive numbers from a mixed array.
let arr = [-1,3,4,5,-4,6,7,-2]
let newarr = arr.filter(myFunction)

function myFunction(num)
{
    return num>=0;
}
console.log(newarr);


//array.filter(callback(element, index, array), thisArg)

//for more example
//1st

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]



//2nd

// const numbers = [10, 20, 30, 40];
// const filtered = numbers.filter((num, index) => index % 2 === 0);
// console.log(filtered); // Output: [10, 30]



