let str = "banana";

console.log(count(str));

// function

function count(str)
{ let count =0;
    for (let i = 0; i<str.length; i++) {
        let p = str[i];
        if(p=="a"||p=="i"||p=="o"||p=="e"||p=="u"||p=="A"||p=="E"||p=="I"||p=="O"||p=="U")
        {
            count++;
        }
       
    }
    return count;
}
