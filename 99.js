//que=>Filtering Out Negative Numbers: Write a function filterOutNegat ives that takes an array of numbers and returns a new array with only the non-negative numbers.

function filterOutNegat(arr)
{
    let ans = arr.filter((num)=>num>=0);
    console.log(ans);
    
}

let arr = [2,4,-7,9,-5,12,-10,0,-1];
filterOutNegat(arr);