//que => Write a function that checks if a string is a palindrome.

let str = "13131"
let arr = str.split("")
let s=0;
let e=arr.length-1;
console.log(palaindrome(arr,s,e));



function palaindrome(arr,s,e)
{
while(s<e)
{
    if(arr[s]!=arr[e])
    {
        return false;
    }
    s++;
    e--;
}
return true;
}


