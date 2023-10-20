// Seek and Destroy
/*
You will be provided with an initial array as the first argument
to the destroyer function, followed by one or more arguments. 
Remove all elements from the initial array that are of the same 
value as these arguments.

The function must accept an indeterminate number of arguments, 
also known as a variadic function. You can access the additional 
arguments by adding a rest parameter to the function definition 
or using the arguments object.
*/
function destroyer(arr, ...args) {
    return arr.filter(element => !args.includes(element));
}
const testData = [
    [["tree", "hamburger", 53], "tree", 53],
    [[2, 3, 2, 3], 2, 3],
    [[3, 5, 1, 2, 2], 2, 3, 5],
    [[1, 2, 3, 5, 1, 2, 3], 2, 3],
    [[1, 2, 3, 1, 2, 3], 2, 3]
];
console.log(destroyer(testData[0][0], testData[0][1], testData[0][2], testData[0][3]));