// const cars = [
//     { make: "Toyota", model: "Corolla", year: 2022 },
//     { make: "Honda", model: "Civic", year: 2021 },
//     { make: "Ford", model: "Mustang", year: 2023 }
// ];

// Access and print each car's properties

//let{make,model,year}=cars;
// cars.forEach(car =>{
//     console.log("make:",car.make);
//     console.log("model:",car.model);
//     console.log("year:",car.year);
//     console.log("---");
    
// });

const users = [
    { name: "Emma", age: 28, city: "San Francisco" },
    { name: "James", age: 32, city: "Seattle" },
    { name: "Sophia", age: 24, city: "Austin" }
];


//using destructuring
for (let i = 0; i < users.length; i++) {
    const { name, age, city } = users[i];
    console.log(`${name} lives in ${city} and is ${age} years old.`);
}