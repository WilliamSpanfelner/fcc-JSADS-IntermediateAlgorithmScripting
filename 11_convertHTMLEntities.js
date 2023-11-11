// Convert HTML Entities

/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding 
HTML entities.
*/

function convertHTML(str) {
    const htmlEntities = {
      '"': '&quot;',
      '&': '&amp;',
      "'": '&apos;',
      '<': '&lt;',
      '>': '&gt;'
    };

    const newStr = str.split('')
    .reduce((newArray, element) => {
        htmlEntities.hasOwnProperty(element) ? newArray.push(htmlEntities[element]) : newArray.push(element);
        return newArray;
    }, [])
    .join('');

    return newStr;
}

const testData = [
    "Hamburgers < Pizza < Tacos",
    "Dolce & Gabbana",
    "Sixty > twelve",
    'Stuff in "quotation marks"',
    "Schindler's List",
    "<>",
    "abc"
];

testData.forEach(element => {
    console.log(convertHTML(element));
});


