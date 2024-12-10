let arr = [2,3,14,5,8];
let max = Number.MIN_VALUE;
for (let i = 0; i < arr.length; i++) {
    if(max<arr[i])
    {
        max=arr[i];
    }
       
}
console.log(max);
