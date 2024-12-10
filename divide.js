let a=10;
const b=0;
console.log(division(a,b));

function division(a,b)
{  
    try {
      if(b==0)
      {
        throw b;
        
      }
      else{
        return a/b;
      }
      
    } catch (b) {
      console.error("b ia not valid");
        
    }
       
    
           
} 
    
