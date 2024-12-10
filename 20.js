//que=>Implement a function that takes a number and returns its factorial (e.g., factorial(5) should return 120).

console.log(fac(0));



//factorial function
function fac(n)
{  if(n==0 || n==1)
    {
    return 1;
    }
 
    return  n* fac(n-1);
    

}
