//que=>Repeating Function with setInterval: Write a function repeatMessage that takes a message and a delay as parameters. Use setInterval to log the message every delay milliseconds. Add a condition to stop the interval after the message has been logged 5 times.
function repeatMessage(message, delay) {
    let count = 0; // Initialize the counter
    const intervalId = setInterval(() => {
        console.log(message);
        count++;
        if (count === 9) { // Stop after 5 repetitions
            clearInterval(intervalId);
        }
    }, delay);
}

// Example usage
repeatMessage("hyy , i am priyanshi!", 1000);
