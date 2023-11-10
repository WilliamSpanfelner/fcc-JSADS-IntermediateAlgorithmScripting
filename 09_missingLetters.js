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

    // Create an actualRange function to return array of individual range elements
    /* Check out this great article:
    https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/ */
    const actualRange = (start, end) =>
        Array.from({ length: end - start + 1 }, 
            (value, index) => String.fromCharCode(start + index)
            );
    
    // call the actualRange function with relevant data
    const contiguousChars = actualRange(startRange, endRange);

    // Create array of characters from input str
    const rangeInStr = str.split('');

    let missingLetter;
    for (let index = 0; index < contiguousChars.length; index++) {
        const element = contiguousChars[index];
        if (rangeInStr.includes(element) == false) {
            missingLetter = element;
        };
    }
    return missingLetter;
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