
function copyObject(obj) {
    return { ...obj };
}

const originalObject = { name: "Alice", age: 25, city: "New York" };


const copiedObject = copyObject(originalObject);

copiedObject.age = 30;

console.log("Original Object:", originalObject); 
console.log("Copied Object:", copiedObject);      