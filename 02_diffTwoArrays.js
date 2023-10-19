// Diff Two Arrays
/* 
Compare two arrays and return a new array with any items 
only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
    const newArr = [];

    console.log(arr1 == arr2);

    const longArr = arr1.length >= arr2.length ? arr1.concat([]) : arr2.concat([]);
    const shortArr = arr1.length >= arr2.length ? arr2.concat([]) : arr1.concat([]);

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
