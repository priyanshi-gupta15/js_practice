// que =>Preserving State with Closures: Create a function createMultiplier that takes a number factor and returns a function that multiplies its input by factor. Test this by creating two multipliers, one with factor = 2 and another with factor = 5.

function createMultiplier(factor)
{
    return function(input)
    {
        return input*factor;
        
    }

}
//create its instance and give value
let multipliers1 =createMultiplier(2);
let multipliers2 =createMultiplier(5);


//then log the value by giving input
console.log(multipliers1(5));
console.log(multipliers2(5));



