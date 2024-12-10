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
