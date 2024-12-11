//que = > Uppercasing Strings: Write a function toUpper CaseArray that takes an array of strings and returns a new array with each string converted to uppercase using the map method.

function toUpper(arr)
{
    let ans = arr.map((number)=>number.toUpperCase());
    console.log(ans);
    

}
let string_arr= ["hyy","i","am" ,"priyanshi"];
toUpper(string_arr);