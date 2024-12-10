//que => Variable Hoisting and Temporal Dead Zone (TDZ): Write code that declares a variable x using let and initializes it after logging it. Observe the behavior to understand the temporal dead zone (TDZ) and contrast this with how var behaves. 



    //what is temporal dead zone =>

    // It refers to the time between entering a block of code and the actual declaration of the variable, during which the variable exists but cannot be accessed.


    // let x;
    // console.log(x);
    // x=9;

    // var y;
    // console.log(y);
    // y=9;

    
        console.log(myVar);
        var myVar = 10;
    
        // console.log(myLet); 
        // let myLet = 20;    //can't access before initialization
    
        // console.log(myConst);
        // const myConst = 30;
        //can't access before initialization
    
    

    