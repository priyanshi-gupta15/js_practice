// que => Countdown Timer with Closure: Write a function createCountdown that takes a starting number n and returns a function that, when called, decrements and logs the countdown from n to 0. Once the countdown reaches 0, the function should log "Countdown complete" instead of going negative.


function createCountdown(n) {
    return function countdown() {
        if (n > 0) {
            console.log(n);
            n--; 
        } else{
            console.log(n);
            
            console.log("Countdown complete");
            return
        } 
        }
    };


// Create a countdown starting at 5
const countdownFrom5 = createCountdown(5);

// Call the returned function multiple times
countdownFrom5(); // Logs: 5
countdownFrom5(); // Logs: 4
countdownFrom5(); // Logs: 3
countdownFrom5(); // Logs: 2
countdownFrom5(); // Logs: 1
countdownFrom5(); 
