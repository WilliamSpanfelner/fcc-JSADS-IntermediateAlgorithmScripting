// DNA Pairing
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs 
are represented by the characters AT and CG, which form 
building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function 
to match the missing base pairs for the provided DNA strand. For 
each character in the provided string, find the base pair character. 
Return the results as a 2d array.

For example, for the input GCG, return 
[["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the 
arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
    const pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    // let dnaPairs = [];
    const unpairedElements = str.split('');
    
    // unpairedElements.forEach(element => {
    //     let pairedElement;
    //     if (element == "G") {
    //         pairedElement = [element, "C"];
    //     } else if (element == "C") {
    //         pairedElement  = [element, "G"];
    //     } else if (element == "A") {
    //         pairedElement  = [element, "T"];
    //     } else if (element == "T") {
    //         pairedElement  = [element, "A"];
    //     }
    //     dnaPairs.push(pairedElement);
    // });

    const dnaPairs = unpairedElements.map(element => [element, pairs[element]]);
    
    return dnaPairs;
}

console.log(pairElement("CTCTA"));
// console.log(pairElement("TTGAG"));
// console.log(pairElement("ATCGA"));
// console.log(pairElement("GCG"));