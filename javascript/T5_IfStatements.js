
/**
 * The syntax is the same with Java. Only difference:
 * In Java the condition must be a boolean expression.
 * In JS,  The condition can be a truthy or falsy value). Non-boolean values are coerced to true or false
 * Truthy: true, objects, non-empty strings, non-zero numbers
 * Falsy: false, null, empty string, 0 and -0, undefined
 */


if (3) {
    console.log(3);
} else {
    console.log(5); 
}
