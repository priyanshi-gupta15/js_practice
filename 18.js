//que=> Write a program that swaps two variables without using a third variable.


let a=1;
let b=8;
console.log(swap(a,b));


//function
function swap(a,b)
{
    a = a+b;
    b = a-b;
    a= a-b;
    return `${a} and ${b}`
}
