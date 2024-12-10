//que =>Shadowing Variables: Create a variable color with the value "blue" in the global scope. Write a function setColor that defines a variable color with the value "red" and logs it. Call setColor and then log the global color variable to see how variable shadowing works.


// when we using and declaring let {global and local}
let color = "blue";

function setColor(){
   let color = "red";
   console.log(color);
   
}

setColor();
console.log(color);


//when we declare let globally not locally

var color1 = "blue";

function setColor1(){
   color1 = "red";
   console.log(color1);
   
}

setColor1();
console.log(color1);


