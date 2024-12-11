function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    if (value !== null) {
        console.log(`${key}: ${value}`);
        return value;
    } else {
        console.log('Key not found');
        return 'Key not found';
    }
}

localStorage.setItem("username" , "priyanshi");

getFromLocalStorage("username");
getFromLocalStorage("sername");
