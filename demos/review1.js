"use strict";
//greeting takes a name parameter
function greeting(first, last){
    return `Hello ${first} ${last}`
}

let firstName = "Kanchan";
let lastName = "Pate"
// calling greeting function and passing the firstName 
//assigning the return value of the function into the message variable
let message = greeting(firstName, lastName); 
console.log(message);