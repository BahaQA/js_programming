/**
 * var is function-scoped or globally scoped.
   let is block-scoped (only accessible within the block {} it is declared in).
   You can create multiple var variables with the same name.
   let has tighter scoping and safer behavior compared to var.
 */

/**
 * Primitives: Number, String, Boolean, Null, Undefined
 * Non-primitives: Objects, Arrays, Functions
 */


//No default value for variables. If a variable is not assigned a value it will be undefined.
 

let name; //undefined
let name2 = null; //null. represents intentional absense, considered as a bug in javascript

let job = 'SDET'; //String. Can be declared in double or single quotes.
let isEmployed = true; //Boolean


console.log(name);
console.log(name2);
console.log(typeof name2);

let num = 5; 
let num2 = 5.9;
console.log(typeof num); //data type is number. Only one datatype for all numbers.


const NUMBER_OF_MONTHS = 12; //Use upper case by convention
//NUMBER_OF_MONTHS = 9; //error at runtime