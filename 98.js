//que=>Filtering Strings Longer than 3 Characters: Write a function filterLongStrings that takes an array of strings and returns a new array containing only the strings with more than 3 characters using filter

function filterLongStrings(arr)
{
    let ans = arr.filter((num)=>num.length>3);
    console.log(ans);
    
}

let arr = ["hyy","hy","hello","priyanshi"];
filterLongStrings(arr);