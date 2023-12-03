// Binary Agents

/*
Return an English translated sentence of the 
passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    // Plan of attack:
    // 1. convert string to array;
    // 2. convert binary elements to decimal;
    // 3. convert decimal elements to unicode characters;
    // 4. join the characters to form string for output;

    return str.split(' ')
    .map(element => parseInt(element, 2))
    .map(element => String.fromCharCode(element))
    .join('');
}
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));