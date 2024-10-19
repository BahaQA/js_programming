/**
 * Unlike arrays in Java, arrays in JavaScript:

Are dynamic: 
JavaScript arrays can grow or shrink in size automatically, whereas Java arrays have a fixed size.

Can hold mixed data types: 
JavaScript arrays can contain different types (e.g., numbers, strings, objects), while Java arrays must be of a single data type.

Are flexible, dynamic objects with numerous built-in methods.
In JavaScript, arrays are a type of object, meaning they have properties and methods like .length, .push(), and .map().

Don't require explicit declaration of size: 
In Java, you must declare the array size, but in JavaScript, you can create arrays without specifying a size.

Support flexible indexing: 
JavaScript arrays allow non-contiguous indices, whereas Java arrays are strictly sequential.
 */

//No Lists in JS, but Set and Map, similar to Java. 

let elements = ['James', 1, 2, 3, true, 5.5]; //Avoid storing multiple types in Array
console.log(elements);

elements[3] = 30;
console.log(elements);

let numbers = [3, 7, 13, 17, 56, 78, 99 ];

// for of loop: similar to for each. Can iterate any secuence
for (let each of numbers) {
    console.log(each);

}

let name = 'Bahadir';
for (const each of name) {
    console.log(each);
}

let team = ['Baha', 'Aaron', 'Chakar',];
team.push('David'); //adds as the last element
console.log(team);

team.unshift('Joseph'); //adds as the first element
console.log(team);


//Start from index 1 and remove 3 elements
team.splice(1, 3);
console.log(team);

team.unshift('Max'); 
team.unshift('John'); 
console.log(team);

team.shift(); //remove first element
console.log(team);

team.pop(); //remove last element
console.log(team);


//Create an array and put 10 random names in it
let names = ['Bahaadir', 'Aaron', 'Chakar', 'David', 'Joseph', 'Max', 'John', 'Sam', 'Anna', 'Rachel'];

//print names

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


//sort names in alphabetical order

names.sort();
console.log(names); //sort names in alphabetical order

//shuffle names

let currentIndex = names.length, temporaryValue, randomIndex;









