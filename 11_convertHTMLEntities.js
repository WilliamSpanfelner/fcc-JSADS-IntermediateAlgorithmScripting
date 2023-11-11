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

    return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// console.log(convertHTML("Dolce & Gabbana"));

