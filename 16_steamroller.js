// Steamroller

/*
Flatten a nested array. 
You must account for varying levels of nesting.
*/ 

function steamrollArray(arr) {
    // let depth = 0;
    // for (const i of arr) {
    //     if (i.length > depth) {
    //         depth = i.length;
    //     }    
    // }
    // find the greatest depth of nesting
    const depth = arr.reduce((depth, element) => {
        if (element.length > depth) {
            depth = element.length
        }
        return depth;
    }, 0);
    console.log(depth);
    /* use flatMap to return a flattened array for all but 
    the deepest nesting and then the flat method to perform 
    final flattening */
    return arr.flatMap(element => element).flat(depth);
}


console.log(steamrollArray([1, {}, [3, [[4]]]]));
// console.log(steamrollArray([1, [], [3, [[4]]]]));
// console.log(steamrollArray([[["a"]], [["b"]]]));
// console.log(steamrollArray([1, 2, [4, 5], 6, 7, [8]]));
// console.log(steamrollArray([1, [2], [3, [[4]]]]));