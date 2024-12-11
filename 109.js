//que=>Merging Arrays: Write a function mergeArrays that takes two arrays and merges them into a single array using the spread operator. Test i by merging arrays of numbers and strings.

function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}

// Example usage with numbers
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const mergedNumbers = mergeArrays(numbers1, numbers2);
console.log(mergedNumbers);  // Output: [1, 2, 3, 4, 5, 6]

// Example usage with strings
const strings1 = ["Hello", "World"];
const strings2 = ["Goodbye", "Universe"];
const mergedStrings = mergeArrays(strings1, strings2);
console.log(mergedStrings); 