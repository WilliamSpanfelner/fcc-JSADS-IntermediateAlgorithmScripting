// Sum All Primes

/*
A prime number is a whole number greater than 1 with 
exactly two divisors: 1 and itself. For example, 2 is 
a prime number because it is only divisible by 1 and 2. 
In contrast, 4 is not prime since it is divisible by 1, 
2 and 4.

Rewrite sumPrimes so it returns the sum of all prime 
numbers that are less than or equal to num.
*/

function sumPrimes(num) {
    // Create array of prime numbers <= num
    const primes = [];
    /**
     * Iterate through values 2 to value to find an integer
     * that divides evenly other than 1 and itself
     * @param {*} value 
     * @returns a boolean
     */
    function isPrime(value) {
        for (let i = 2; i < value; i++) {
            /* since value cannot equal i (e.g. itself) by this for...loop definition,
            if value is evenly divisible by i then it cannot be prime*/
            if (value % i == 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i < num + 1; i++) {
        // if i is a prime and it's not already in the primes array push i in
        if (isPrime(i) && (!primes.includes(i))) {
            primes.push(i);
        }
    }

    console.log(primes);
    // Sum the primes
    return primes.reduce((sum, element) => sum += element, 0);
}

const testData = [10, 977];
testData.forEach(element => {
    console.log(sumPrimes(element));
});

// 17 73156
