// Missing letters

/*
Find the missing letter in the passed letter range 
and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    // Get the UTF-16 code for starting and ending chars
    const startRange = str.charCodeAt(0);
    const endRange = str.charCodeAt(str.length - 1);
    // console.log(startRange.charCodeAt(0));
    // console.log(endRange.charCodeAt(0));
    // console.log(endRange.charCodeAt(0) - startRange.charCodeAt(0) + 1);
    // console.log(str.length);
    console.log(str.charCodeAt(0), str.charCodeAt(str.length - 1));

    // Compute actual length of range  
    const actualRangeLength = endRange - startRange + 1
    console.log(actualRangeLength);

    // Create an array with individual range elements
    /* Check out this great article:
    https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/ */
    const actualRange = (start, end) =>
        Array.from({ length: end - start + 1 }, 
            (value, index) => String.fromCharCode(start + index)
            );
            
    return str;
}

testData = [
    "abcdefghijklmnopqrstuvwxyz",
    "bcdf",
    "stvwx",
    "abcdefghjklmno",
    "abce"
]

for (const str of testData) {
    console.log(fearNotLetter(str));
}