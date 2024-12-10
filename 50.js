//que => Create a for loop that iterates 3 times. Inside the loop, declare a variable counter using let and set it to the loop index. Log counter inside the loop, then try logging counter outside the loop and note the result. Repeat this with var to observe the difference.

for (let i = 0; i < 3; i++) {
    let counter =i;
    console.log(counter);
       
}
console.log(counter);//using "let" we can not access "counter" outside its scope
// give error{counter is not defined}


for (let i = 0; i < 3; i++) {
    var counter =i;
    console.log(counter);
       
}
console.log(counter);

//using var we can accces the count outside the loop or its scope