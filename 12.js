//que =>Use map to create an array with each number squared from an existing array of numbers.


const numbers = [15, 5, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * num;
}
console.log(newArr);