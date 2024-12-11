//que=>Simple setInterval Counter: Write a function startCounter that takes a number n as an argument and uses setInterval to log each number from 1 up to n every second. Once n is reached, clear the interval.

function startcounter(n){

    count=n;
      
         let timeout= setInterval(() => {
              console.log(count);
              count--;
              if(count==0)
              {
                  clearInterval(timeout);
                  console.log("times up");
              }
          }, 1000);
          
   // clearInterval(timeout);
    
  }
  
  
  let n=10;
  
  
  
  //call
  startcounter(n);