// Sum All Odd Fibonacci Numbers

/*
Given a positive integer num, return the sum of all 
odd Fibonacci numbers that are less than or equal 
to num.

The first two numbers in the Fibonacci sequence are 
0 and 1. Every additional number in the sequence is 
the sum of the two previous numbers. The first seven 
numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all 
odd Fibonacci numbers less than or equal to 10 are 1, 
1, 3, and 5.
*/

function sumFibs(num) {
    // first create a Fibonacci sequence to the num value
    let fibSeq = [0, 1];
    for (let i = 0; i < num + 1; i++) {
        const element = fibSeq[i] + fibSeq[i + 1];
        if (element > num) {
            break;
        } else {
            fibSeq.push(element);
        } 
    }
    // let i = 0
    // while (fibSeq[fibSeq.length - 1] <= num) {
    //     const element = fibSeq[i] + fibSeq[i + 1];
    //     fibSeq.push(element);
    //     i++;
    // } 

    console.log(num, fibSeq);

    // filter the odd values

    // return the sum of odd values
    return num;
}

console.log(sumFibs(4));
