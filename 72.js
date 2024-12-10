//que = > Delayed Message with Parameters: Write a function delayedGreeting that takes two parameters, name and delay. Use setTimeout to log "Hello, [name]!" after delay milliseconds.

let str ="priyanshi";
let delay =1000;

delayGreeting(str,delay);


function delayGreeting(str,delay)
{
    let timeout = setTimeout(() => {
       console.log("hello",str);
       
    },delay);
    clearTimeout(timeout);
    
    console.log("Timeout has been canceled before execution.");


}
