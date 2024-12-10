//que =>Implement a function that filters out numbers less than 10 from an array using the .filter() method.Write a function to reverse a given string.

let str = "how are you";
let reversedStr ="";
reverse(str,reversedStr);
 
//function
function reverse(str,reversedStr)
{
    // while(s<e)
    // {
    // const temp = str.charAt(s);
    // str.charAt(s) = str.charAt(e);//string is immutable can't do like that
    // str.charAt(e)=temp;
    // s++;
    // e--;
    // }
    // console.log(str);

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(reversedStr);

}