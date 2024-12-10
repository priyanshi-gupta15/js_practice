

let message = "hyy i am back"
//calling a function
delayedMessage(message)

function delayedMessage(message)
{
    let timeout = setTimeout(()=>{
        console.log(message);
        
    },3000)
}