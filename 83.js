//que =>Asynchronous Callback with setTimeout: Create a function delayedSum that takes two numbers and a callback. After a 3-second delay (using setTimeout), call the callback with the sum of the two numbers.

function delayedSum(a,b,callback)
{
   setTimeout(()=>{
    adder(a,b);
    
    

    },3000)
}

function adder(a,b)
{
  console.log(a+b);
}

let ans = delayedSum(3,7,adder);
