//que=>Saving Data to LocalStorage: Write a function saveToLocalStorage that takes a key and a value as parameters, then stores the value in LocalStorage under the given key. Test the function by saving a string like "username" with a value of "JohnDoe".

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
    console.log(`Saved ${key} with value: ${value}`);
}

// Test the function
saveToLocalStorage('username', 'priaynshi');

// Verify if the value is stored in LocalStorage
console.log('Username retrieved from LocalStorage:', localStorage.getItem('username'));

localStorage.clear();
console.log('Username retrieved from LocalStorage:', localStorage.getItem('username'));
