// Pig Latin
/*
Pig Latin is a way of altering English Words. The rules 
are as follows:

- If a word begins with a consonant, take the first consonant 
or consonant cluster, move it to the end of the word, and 
add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are 
guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    const regex = /^[aeiou]/;
    const vowelPrefix = str.match(regex) ? str.concat('way') : str;
    console.log(vowelPrefix);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    const charArray = str.split('');
    let maxIndex;
    
    // iterate charArray until a vowel is found logging 
    // the maxIndex of the last prefix consonant
    for (let i = 0; i < charArray.length; i++) {
        const element = charArray[i];
        
        if (vowels.includes(element)) {
            break;
        } else {
            maxIndex = charArray.indexOf(element);
            // console.log(element, maxIndex, charArray);
        }
    }

    // Get the consonant prefix of the word
    if (maxIndex != undefined) {
        const consonantChunk = charArray.slice(0, maxIndex + 1);
        const bodyChunk = charArray.slice(maxIndex + 1);
        const newWord = bodyChunk.concat(consonantChunk).join('') + 'ay';
        // console.log(consonantChunk, bodyChunk, newWord);
        return newWord;
    } else {  // word must begin with a vowel
        // return str + 'way'
    }
}

const testData = [
    "rhythm",
    "schwartz",
    "consonant",
    "california",
    "paragraphs",
    "glove",
    "algorithmway",
    "eight",
]

testData.forEach(element => {
    console.log(translatePigLatin(element));
});