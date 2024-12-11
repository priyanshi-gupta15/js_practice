//que Removing Data from LocalStorage: Write a function removeItemFromLocalStorage that removes a given key from LocalStorage. Test this by saving a key-value pair, then removing it and checking if it has been successfully removed.


function removeItemFromLocalStorage(key)
{   console.log("check the key");

    let value=localStorage.getItem("username")
    if(value !== null)
    { localStorage.removeItem("username");
        console.log("removed sussefully");
    
    }
    else{
        console.log("key not present");
        
    }
    return;


}

localStorage.setItem("username","priyanshi gupta");
removeItemFromLocalStorage("username")
removeItemFromLocalStorage("user")
