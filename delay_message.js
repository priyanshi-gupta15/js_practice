let str ="priyanshi";
let delay =1000;

delayGreeting(str,delay);


function delayGreeting(str,delay)
{
    setTimeout(() => {
       console.log("hello",str);
    
    },delay);

}
