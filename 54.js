//que =>Closure with Parameters: Write a function makeAdder that takes a number x and returns a function that takes another number y and returns the sum of x and y. Test it by creating an instance with x = 5 and calling it with different values of y.

// Closure
//Definition: A closure is created when a function "remembers" and continues to have access to variables from its lexical scope, even after the outer function has finished executing.

function makeAdder(x)
{   //let count=0;
 return function(y)
 {  //console.log(count++);
 
    return x+y;

 }
}


// Create an instance of the adder with x = 5
const add5 = makeAdder(5);

// Test the function with different values of y
console.log(add5(3)); // Logs: 8 (5 + 3)
console.log(add5(10)); // Logs: 15 (5 + 10)
console.log(add5(-2)); // Logs: 3 (5 + -2)
