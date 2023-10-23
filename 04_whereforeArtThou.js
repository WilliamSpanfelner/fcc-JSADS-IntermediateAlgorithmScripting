// Wherefore art thou
/*
Make a function that looks through an array of objects 
(first argument) and returns an array of all objects 
that have matching name and value pairs (second argument). 
Each name and value pair of the source object has to be 
present in the object from the collection if it is to be 
included in the returned array.

For example, if the first argument is [{ first: "Romeo", 
last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], and the second 
argument is { last: "Capulet" }, then you must return the 
third object from the array (the first argument), because 
it contains the name and its value, that was passed on as 
the second argument.
*/
function whatIsInAName(collection, source) {
    // Get the objects from the source argument and then their values
    const sourceEntries = Object.entries(source);
    const sourceKey = sourceEntries[0][0]; // Object.keys(source);
    const sourceValue = sourceEntries[0][1] // source[sourceKey];

    // Test each element of the collection to find matches
    const newArr = collection.map((element) =>
    element.hasOwnProperty(sourceKey) && element[sourceKey] == sourceValue);
    console.log(newArr);

    // Create an array of results using a for loop
    const newerArr = [];
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        if (element.hasOwnProperty(sourceKey) && element[sourceKey] == sourceValue) {
            newerArr.push(element);
        }
    }
    console.log(newerArr);

    // Create the same array as above with the filter method.
    const newestArr = collection.filter((element) =>
    element.hasOwnProperty(sourceKey) && element[sourceKey] == sourceValue);
    console.log(newestArr);

    return newestArr;
}

console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));

// console.log(whatIsInAName([
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null }, 
//     { first: "Tybalt", last: "Capulet" }], 
//     { last: "Capulet" }
//     ));