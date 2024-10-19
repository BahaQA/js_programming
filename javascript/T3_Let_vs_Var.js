
//With let variable name cannot be duplicated.
let school = 'Cydeo';
// let school = 'MIT'; //Extension is showing the error. the error will be thrown at runtime.


// let can be a local variable but var cannot.
if(true){
    let a = 200;
}

var country = 'Japan'; //var is the old way of declaring variables in js
var country = 'Korea'; //variable can be duplicated, no errors

if(true){
    var a = 200;
}

console.log(a); //accessible outside the block. var can never be a local variable.