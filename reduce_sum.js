let arr = [15, 16, 17, 18, 19]
let newarr = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  // acc=15,currentvalue=16,index=1;return value =31 set to next accum , intial value is 0;

  console.log(newarr);
  
// Syntax
// js

// reduce(callbackFn)
// reduce(callbackFn, initialValue)