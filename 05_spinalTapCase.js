// Spinal Tap Case

/* Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

    // function replacer(match, p1, p2, p3, offset, string) {
    //     // p1 is non-digits, p2 digits, and p3 non-alphanumerics      abc12345#$*%  ([^\d]*)(\d*)([^\w]*)
    //     return [p1, p2, p3].join(" - ");
    // }
    // const newString = "thisIsSpinalTap".replace(/([a-z][A-Z])/g, replacer);
    // console.log(newString);

    // const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

    // console.log(names);

    // const re = /\s*(?:;|$)\s*/;
    // const nameList = names.split(re);

    // console.log(nameList);


    // str contains capitals?
    // let regex;
    // let splitStr = '';
    // if (str.match(/([a-z])([A-Z])/g)) {
    //     regex = /([a-z])([A-Z])/g;
    //     splitStr = str.replace(regex, '$1 $2');
    // } else {   // if (str.match(/\s|_/g)) {
    //     regex = /\s|_/g;
    //     splitStr = str.replace(regex, ' ');
    // }
    const splitStr = str.match(/([a-z])([A-Z])/g) ? 
        str.replace(/([a-z])([A-Z])/g, '$1 $2') :
        str.replace(/\s|_/g, ' ');

    // console.log(splitStr);

    // convert string to lowercase
    const lowercaseStr = splitStr.toLowerCase();
    // console.log(lowercaseStr);

    // replace spaces with hyphens
    const spinalcase = lowercaseStr.replace(/\s/g, '-');
    // console.log(spinalcase);
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
