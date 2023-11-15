// Smallest Common Multiple

/*
Find the smallest common multiple of the provided 
parameters that can be evenly divided by both, as 
well as by all sequential numbers in the range 
between these parameters.

The range will be an array of two numbers that will 
not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest 
common multiple of both 1 and 3 that is also evenly 
divisible by all numbers between 1 and 3. The answer 
here would be 6.
*/

function smallestCommons(arr) {
    // Determine min and max values of arr
    const min_arr_Value = Math.min(...arr);
    const max_arr_Value = Math.max(...arr);
    console.log(min_arr_Value, max_arr_Value);

    // create range of values between min and max
    const rangeValues = [];
    for (let index = min_arr_Value; index < max_arr_Value + 1; index++) {
        rangeValues.push(index);
    }
    console.log(rangeValues);


    return arr;
}

smallestCommons([1,5]);

