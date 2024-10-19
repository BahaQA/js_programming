
//you need to export something from a module before it can be imported into another file.

function square(number){
    return number * number;
   }

   function cube(number){
    return number * number * number;
   }

   module.exports = {
    square, cube
   }