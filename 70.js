//que=>Countdown Timer with setInterval: Create a countdown function countdown that takes a starting number n and uses setInterval to log each number down to 0 every second. When it reaches 0, it should log "Time's up!" and stop.

function startcounter(n){

    count=0;
      
         let timeout= setInterval(() => {
              console.log(count);
              count++;
              if(count>n)
              {
                  clearInterval(timeout);
                  console.log("all clear");
              }
          }, 0);
          
   // clearInterval(timeout);
    
  }
  
  
  let n=10;
  
  
  
  //call
  startcounter(n);