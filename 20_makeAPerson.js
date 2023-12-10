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

    // Call the respective functions to get the full name
    this.getFullName = function () {
        return `${this.getFirstName()} ${this.getLastName()}`;
    };
    // Get the value in fname
    this.getFirstName = function() {
        return fname;
    }
    // Get the value in lname
    this.getLastName = function() {
        return lname;
    }
    // Set the value for fname
    this.setFirstName = function (first) {
        return fname = first;
    }
    // Set the value for lname
    this.setLastName = function (last) {
        return lname = last;
    }
    // Set the value for fullname using the other two functions
    this.setFullName = function (first, last) {
        this.setFirstName(first);
        this.setLastName(last);
        return this.getFullName();
    };
};

let p = new Person("Haskell", "Curry");
console.log(p.getFullName());
console.log(p.getFirstName());
console.log(p.getLastName());