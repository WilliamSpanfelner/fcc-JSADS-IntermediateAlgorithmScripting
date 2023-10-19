// Diff Two Arrays
/* 
Compare two arrays and return a new array with any items 
only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/
function diffArray(arr1, arr2) {
    // const newArr = [];

    // for (let c = 0; c < 2; c++) {  // iterate over each array
    //     for (let i = 0; i < arr1.length; i++) {
    //         const element = arr1[i];
    //         if (!arr2.includes(element)) {
    //             newArr.push(element); // if an element isn't included add it to newArr
    //         }
    //     }
    //     [arr1, arr2] = [arr2, arr1]; // swap arrays
    // }

    // return newArr;
    return arr1
    .concat(arr2)
    .filter(element => !arr1.includes(element) || !arr2.includes(element));
}

const arrays = [
    [[1, 2, 3, 5], [1, 2, 3, 4, 5]],
    [[1, "calf", 3, "piglet"], [1, "calf", 3, 4]],
    [["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]],
    [[1, "calf", 3, "piglet"], [7, "filly"]],
    [[], ["snuffleupagus", "cookie monster", "elmo"]],
];

console.log(diffArray(arrays[0][0], arrays[0][1])); 
