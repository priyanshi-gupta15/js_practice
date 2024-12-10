// que => Basic Closure: Write a function createCounter that defines a variable count set to 0. The function should return another function that increments and logs count each time it’s called. Call the returned function multiple times to see if count is preserved.

function createCounter()
{
    let count =0;
    return  function()
    {
        count++;
        console.log(count);
        
    };
}

let counter = createCounter();
counter();
counter();
counter();