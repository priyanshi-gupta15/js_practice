//que => setTimeout: Write a function delayedMessage that takes a message and a delay (in milliseconds) as arguments and logs the message after the specified delay using setTimeout.

let message = "hyy i am back"
//calling a function
delayedMessage(message)

function delayedMessage(message)
{
    let timeout = setTimeout(()=>{
        console.log(message);
        
    },3000)
}