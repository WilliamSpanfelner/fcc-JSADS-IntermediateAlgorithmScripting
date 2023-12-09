// Arguments Optional

/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a 
function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and 
addTogether(2) should return a function.

Calling this returned function with a single argument 
will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
function addTogether(...args) {
    // console.log(args.length,
    //     args[0], typeof (args[0]),
    //     args[1], typeof (args[1]));
    // Have one or two arguments been supplied
    if (args.length == 2) {
        // Check if both args are of type number and add them if so
        if (typeof (args[0]) == "number" && typeof (args[1]) == "number") {
            return args[0] + args[1];
        }
    } else if (args.length == 1) {
        // Check that the one arg supplied is a number and return func
        if (typeof (args[0]) == "number") {
            return function (b) {
                // Check that the second arg supplied is a nmber and sum
                if (typeof (b) == "number") {
                    return args[0] + b;
                }
            }
        } 
    }
    return undefined;
}

console.log(addTogether(5));
console.log(addTogether(5)(7));
console.log(addTogether(2)([7]));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
// console.log(addTogether(2, 8));
// console.log(addTogether("2", 3));
// var sumTwoAnd = addTogether(2);
// console.log(sumTwoAnd(3));
// console.log(sumTwoAnd("3"));