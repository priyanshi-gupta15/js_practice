//que=>Extracting Property Values: Write a function getNames that takes an array of objects (each with a name property) and returns an array of names using map


   
function getNames(objects) {
    return objects.map(obj => obj.name);
}

const people = [
    { name: "you", age: 25 },
    { name: "me", age: 30 },
    { name: "we", age: 22 }
];

const names = getNames(people);
console.log(names); 