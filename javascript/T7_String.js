
/**
 * Here are the differences between strings in Java and JavaScript:
Immutability:
Java: Strings are immutable; once created, they cannot be changed.
JavaScript: Strings are also immutable, but JavaScript allows easier manipulation with template literals.
String Concatenation:

String Concatenation:
Java: Uses the + operator for concatenation.
JavaScript: Uses + operator, but also supports template literals (backticks) for easier string interpolation.
String as an Object:

String as an object:
Java: Strings are objects, explicitly defined as String type.
JavaScript: Strings are primitive values but can behave like objects when methods are called.
Multiline Strings:

Multiline Strings:
Java: Requires concatenation with +, or uses text blocks (Java 13+ with triple quotes).
JavaScript: Uses template literals (backticks) for multiline strings.
 */


let schoolName = 'Cydeo School';


console.log(schoolName[6]); // [] can be used for all sequences: Strings, Arrays, List, Map, etc.

schoolName.toLocaleLowerCase(); // New object is created but not referenced. Cannot change the schoolName, immutable. 
let schoolName2 = schoolName.toLocaleLowerCase;

//JS does not have equalsIgnoreCase method. So you need to convert the string to lower or upper case.

let code = 'Python Python';
let coded = code.replace('Python', 'Javascript'); //it will replace the first occurance only. In Java all occurences.
console.log(coded);

let coded2 = code.replaceAll('Python', 'Javascript');
console.log(coded2);

//using regex
let str = 'slkdfj345k4lkjfg9898kfmlfgj5o6i94lgkj9459';
let result = str.replace(/\d+/g, '');
console.log(result);

//The backtick is used for template literals
let age = 20;
console.log(`I am ${age} years old`);
