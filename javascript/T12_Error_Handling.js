
console.log('Test started here');

try {
    console.log(result)
} catch (e) {
    console.log('An error has occured at runtime', e); //e --> reference variable of the error object  
}finally{
    console.log('error handling is completed');
}

console.log('Test ended here');

throw new Error('Throwing a new error because sth went wrong1')