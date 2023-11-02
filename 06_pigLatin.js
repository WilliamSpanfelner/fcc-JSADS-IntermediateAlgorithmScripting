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
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const testStr = 'b';
    if (testStr in vowels) {
        console.log("That's a vowel");
    } else {
        console.log("That's a consonant")
    }    
    
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
            console.log(element, maxIndex, charArray);
        }
    }

    return str
}

translatePigLatin("consonant");