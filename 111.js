// que=> Merging Objects: Write a function mergeobjects that takes two objects and merges them into a single object using the spread operator. Test the function with objects that have both unique and overlapping properties.

function mergeobjects(object1,object2)
{
    return {...object1,...object2}
}


const object1 = { name: "priyanshi",surname:"gupta", age: 20, city: "jaipur" };
const object2 = { age: 19, profession: "Engineer", country: "india" };

let ans =mergeobjects(object1,object2);
console.log(ans);




