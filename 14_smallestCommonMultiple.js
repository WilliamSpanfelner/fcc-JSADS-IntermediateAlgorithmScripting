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
        /**
         * Check array to see if all elements == 1
         * @param {*} arr 
         */
        function elementsNotOne(arr) {
            const equalsOne = arr.reduce((results, element) => {
                results.push(element == 1);
                return results;
            }, []);
            return equalsOne.includes(false);
            // return arr.map(element => element == 1).includes(false);
        }
    // Determine min and max values of arr
    const min_arr_Value = Math.min(...arr);
    const max_arr_Value = Math.max(...arr);

    // create range of values between min and max
    const rangeValues = [];
    for (let index = min_arr_Value; index < max_arr_Value + 1; index++) {
        rangeValues.push(index);
    }

    // Filter rangeValues elements > 1
    const initialValues = rangeValues.filter(element => element > 1);

    // Create a copy of initialValues for mutating
    let converging = initialValues.concat([]);


    let lcmFactors = [];
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23];
    let primeIndex = 0;
    let foundFactor = false;

    while (elementsNotOne(converging)) {
        // Iterate through entire converging array dividing by small primes
        for (const index in converging) {
            /* Check if a prime evenly divides into an element and if so,
            mutate the array with the division and flag */
            if (converging[index] % primes[primeIndex] === 0 && converging[index] != 1) {
                // flag that an element was evenly divisible
                foundFactor = true;
                // perform division and store it in converging
                converging[index] /= primes[primeIndex]; 
                // console.log(converging);
            }
        }    
        
        /* If a pass through the entire array completes without finding a 
        divisible element and elements of converging are not all equal to 1, 
        increase the primeIndex  */
        if (!foundFactor) {
            primeIndex++;
            // console.log("primeIndex increased to: ", primeIndex );
        }
        // Push prime to the lcm array
        if (foundFactor == true) {
            lcmFactors.push(primes[primeIndex]);
            // reset flag
            foundFactor = false;
        }
    }
    
    return lcmFactors.reduce((prod, element) => prod *= element, 1);  // leastCommonMultiple;

    return arr;
}

const testData = [
    [3, 1],  // 6
    [5, 1],  // 60
    [2, 10],  // 2520
    [1, 13],  // 360360
    [23, 18]  // 6056820
];

testData.forEach(element => 
    console.log("LCM is:", smallestCommons(element))
);


// console.log("LCM is:", smallestCommons([5, 1]));

