//que=> Write a program that takes an array and logs only the even numbers in the array.
let arr = [0,2,4,7,90,77,5,6,71,22];
let newarr =[];
let k=0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2==0)
    {
    newarr[k++]= arr[i]; 
    } 
}
console.log(newarr);
