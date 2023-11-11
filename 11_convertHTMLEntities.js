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

    return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));
// console.log(convertHTML("Dolce & Gabbana"));

