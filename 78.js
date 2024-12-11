//que=>Using Callbacks for Function Composition: Write two functions, double and square, that take a number as input and return its double and square, respectively. Then, write a function calculate that takes a number and two callbacks, calling the first callback on the number and then passing the result to the second callback.

function calculate(a,callback1,callback2)
{      let ans = callback1(a);
     console.log(  "final ans is ",callback2(ans));

}


function double(a)
{
    return a+a;

}

function square(b)
{
return b*b;
}

calculate(2,double,square);
calculate(4,double,square);
calculate(6,double,square);