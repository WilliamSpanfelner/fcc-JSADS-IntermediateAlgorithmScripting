// Sorted Union

/*
Write a function that takes two or more arrays and 
returns a new array of unique values in the order of 
the original provided arrays.

In other words, all values present from all arrays 
should be included in their original order, but with 
no duplicates in the final array.

The unique numbers should be sorted by their original 
order, but the final array should not be sorted in 
numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arr) {
    // Create a new array of all of input elements except the first
    const arrTail = arr.slice(1);

    // Concatenate arrTail to the initial array element to get a single
    // contiguous array
    const newArr = arr[0].concat(...arrTail);
    
    // Create a set from newArr to preserve order and uniquiness of all elements
    const uniqueElements = new Set(newArr);

    // Convert the uniqueElements to array.
    return [...uniqueElements];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));  // [1, 3, 2, 5, 4]
