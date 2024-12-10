// que => IIFE (Immediately Invoked Function Expression): Write an IIFE that defines a variable secret set to "hidden message" and logs it. Then, try accessing secret outside the IIFE to see if it’s accessible.


//Syntax of IIFE  

// (function() {
//     // Function body
// })();

 (function() {
    let secret = "hidden message";
    console.log(secret);  
 })();

 //console.log(secret);//can't access the secret
 console.log(typeof(secret)); //undefined
 
 