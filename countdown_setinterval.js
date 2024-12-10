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