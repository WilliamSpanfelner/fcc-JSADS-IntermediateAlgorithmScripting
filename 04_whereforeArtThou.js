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
  const sourceSize = Object.keys(source).length;  // Interested in objects of this size.
  let returnArray = [];
  let temporaryObject = {};

  for (let i = 0; i < collection.length; i++) {
    const collectionObject = collection[i]; // an object in the collection
    const collectionObjectLength = Object.keys(collectionObject).length;

    if (collectionObjectLength >= sourceSize) {   // is the object size >= the source size?
      for (const key in collectionObject) {  // get a key/value pair
        if (Object.hasOwnProperty.call(collectionObject, key)) {
          const collObjectValue = collectionObject[key];  // is the same key/value pair contained in source?
          if (Object.hasOwnProperty.call(source, key)) {
            const sourceValue = source[key];
            if (sourceValue == collObjectValue) {
              // add to temporary object
              temporaryObject[key] = sourceValue;
              /* is the number of key value pairs in the temp object equivalent 
              to the number in the source object? */
              if (Object.keys(temporaryObject).length == sourceSize) {
                returnArray.push(collectionObject);
                temporaryObject = {}; 
              }
            } else {
              continue
            }
          }
        }
      }
    }
  }
  return returnArray
}


  
// whatIsInAName([{ "c": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));

// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
/*
[
  {
    apple: 1,
    bat: 2,
  },
  {
    apple: 1,
    bat: 2,
    cookie: 2,
  },
]
*/

// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
/* 
[
  {
    apple: 1,
  },
  {
    apple: 1,
  },
  {
    apple: 1,
    bat: 2,
  },
]
*/

// console.log(whatIsInAName([
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null }, 
//     { first: "Tybalt", last: "Capulet" }], 
//     { last: "Capulet" }
//     ));
/*
[
  {
    first: "Tybalt",
    last: "Capulet",
  },
]
*/
