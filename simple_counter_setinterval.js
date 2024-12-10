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