//que=>Filtering Adult Users: Write a function filterAdults that takes an array of user objects (each with an age property) and returns an array of users who alp 18 years or older.

 
function filterAdults(objects) {
    return objects.filter(obj => obj.age>18);
}

const people = [
    { name: "you", age: 22 },
    { name: "me", age: 30 },
    { name: "we", age: 2 }
];

const names = filterAdults(people);
console.log(names); 