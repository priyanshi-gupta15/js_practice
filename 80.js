//que=>Chaining Callbacks: Write two functions, add and multiply, that take a number as an argument and return the result of adding 5 or multiplying by 2, respectively. Create a function chainedOperations that first adds 5 and then multiplies the result by 2 using callbacks.

function add(a,callback2)
{
  let ans = a+5;
  return multiply(ans);

}
function multiply(b)
{ 
  return b*2;
}


function chainedOperations(a,callback1,callback2)
{
    let ans = add(a,callback2);

     console.log(ans);

}

chainedOperations(1,add(),multiply());