//que=>Write a function that calculates the factorial of a number using recursion.

console.log(fac(0));



//factorial function
function fac(n)
{  if(n==0 || n==1)
    {
    return 1;
    }
 
    return  n* fac(n-1);
    

}
