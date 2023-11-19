// Drop it

/*
Given the array arr, iterate through and remove 
each element starting from the first element 
(the 0 index) until the function func returns 
true when the iterated element is passed through it.

Then return the rest of the array once the condition 
is satisfied, otherwise, arr should be returned as 
an empty array.
*/

function dropElements(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // Return the arr contents from the first element that returns true
        if (func(element)) {
            return arr.slice(i);
        }
    }
    
    // Otherwise return an empty array
    return [];
}
console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));          // [1, 2, 3] [1, 2]
