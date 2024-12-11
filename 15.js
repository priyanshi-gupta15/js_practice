
//que=> Write a function that takes two numbers and returns their division. Add error handling to check if the second number is zero and return an error message if it is.

function divideNumbers(a, b) {
  try {
      if (typeof a !== "number" || typeof b !== "number") {
          throw new Error("Both inputs must be numbers.");
      }
      if (b === 0) {
          throw new Error("Division by zero is not allowed.");
      }
      return a / b;
  } catch (error) {
      return `Error: ${error.message}`;
  }
}

// Example usage
console.log(divideNumbers(10.2, 11));      // Logs: 5
console.log(divideNumbers(10, 0));      // Logs: Error: Division by zero is not allowed.
console.log(divideNumbers(10, "two"));  // Logs: Error: Both inputs must be numbers.
console.log(divideNumbers("ten", 2));   // Logs: Error: Both inputs must be numbers.

    
