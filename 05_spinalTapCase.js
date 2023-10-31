// Spinal Tap Case

/* Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
    // convert string to lowercase
    const lowercaseStr = str.toLowerCase();
    console.log(lowercaseStr);

    // replace spaces with hyphens
    const spinalcase = lowercaseStr.replace(/\s/g, '-');
    console.log(spinalcase);
    return str;
}

spinalCase('This Is Spinal Tap');
