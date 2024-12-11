//que=>Recursive setTimeout as Interval: Implement a function recursiveTimer that takes a number n and logs "Time remaining: n" every second, counting down to 0, using setTimeout recursively (instead of setInterval). Once n reaches 0, it should log "Done!".
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