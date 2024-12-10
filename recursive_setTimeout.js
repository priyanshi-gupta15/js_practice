function recursiveTimer (n)

{
    if(n<0) return;
    if(n==0)
    {   console.log(n);
    
        console.log("done!");
        return;
        
    }
    console.log(n);
    setTimeout(() => {
        recursiveTimer(n-1);
        
    }, 1000);
    

}


recursiveTimer(5)