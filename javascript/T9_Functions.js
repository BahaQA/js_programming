/**
 * Functions are independent blocks of code that can be called globally.
   Methods are functions that are defined inside an object and operate on the data within that object.
   Both are essentially functions in JavaScript, but methods are tied to objects.
 */

   function greetings(){
    console.log("hello programmers");
    console.log('hello Cydeo');
    console.log('hello World');
    
   }

   greetings();

   function displayValue(value){
      console.log(value);
   }

   displayValue('Baha');


   function displayValue2(value = 'Unknown value'){ //When no argument is passed, the default value is Undefined. we can change the default value this way.

    console.log(value);
 }

 displayValue2();

 function square(number){
  return number * number;
 }

 let num = square(10); //Assign function to a variable
 console.log(num);

 //var in a function is accessible in the function only
 