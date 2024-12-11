//que=>Filtering Even Numbers: Write a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers. Use the filter method.

function incrementEachByOne(arr)
{
    let ans = arr.filter((num)=>num%2===0);
    console.log(ans);
    
}

let arr = [2,4,7,9,5,12,10];
incrementEachByOne(arr);