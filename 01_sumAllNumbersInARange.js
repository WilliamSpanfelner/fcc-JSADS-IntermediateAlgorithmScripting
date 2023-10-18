// Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of 
those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all 
the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
    const sortedArr = arr
    .concat([])
    .sort((a, b) =>
        a === b ? 0 : a > b ? 1 : -1
    );
    
    let sum = 0;
    for (let index = sortedArr[0]; index <= sortedArr[1]; index++) {
        sum += index;
    }
    return sum;
}

const testData = [
    [1, 4],
    [4, 1],
    [5, 10],
    [10, 5]
];
for (const item of testData) {
    console.log(sumAll(item));
}

