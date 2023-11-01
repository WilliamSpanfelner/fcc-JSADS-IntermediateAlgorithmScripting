// Spinal Tap Case

/* Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    // split str according to orginal form
    const splitStr = str.match(/([a-z])([A-Z])/g) ?  // lower and uppercase together can be separated by a space 
        str.replace(/([a-z])([A-Z])/g, '$1 $2') :
        str.replace(/\s|_/g, ' ');   // otherwise separate the text by spaces or underscores

    // convert string to lowercase
    const lowercaseStr = splitStr.toLowerCase();

    // replace spaces with hyphens
    const spinalcase = lowercaseStr.replace(/\s/g, '-');
    return spinalcase;
}

testData = [
    'thisIsSpinalTap',
    'This Is Spinal Tap',
    'The_Andy_Griffith_Show',
    'Teletubbies say Eh-oh',
    'AllThe-small Things'
]

testData.forEach(element => {
    console.log(spinalCase(element));
});
