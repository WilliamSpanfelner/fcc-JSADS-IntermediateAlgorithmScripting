//Make a Person

/*
Fill in the object constructor with the following methods 
below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)

Run the tests to see the expected output for each method. 
These methods must be the only available means of 
interacting with the object. Each test will declare a new 
Person instance as new Person('Bob', 'Ross').
*/

const Person = function (first, last) {
    // Create storage for first and last parameters
    let fname = first;
    let lname = last;

    this.getFullName = function () {
        return "";
    };
    // Get the value in fname
    this.getFirstName = function() {
        return fname;
    }

    return "";
};
