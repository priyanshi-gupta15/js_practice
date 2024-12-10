

  function repeatMessage(m,t){

    count=1;
      
         let timeout= setInterval(() => {
              console.log(m);
              count++;
              if(count==5)
              {
                  clearInterval(timeout);
                  console.log("all clear");
              }
          }, t);
          
   // clearInterval(timeout);
    
  }
  
  
  let t=1000;
  let m ="you are mine";
  
  
  
  //call
  repeatMessage(m,t);