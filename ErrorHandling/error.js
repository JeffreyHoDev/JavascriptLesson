// We have Error constructor native
// new Error(), create instance but actually it didnt really do anything

// in JS we got throw keyword
// throw new Error(), now you get proper error

// we can throw anything in JS
// throw 'string', throw 'true' etc. 
// throw stops the execution of the program

const myError = new Error('oh no')
myError.name
myError.message
myError.stack // stack trace, show us where the error happen

// JS itself has a lot of error constructor
new SyntaxError
new ReferenceError
// In JS, throw seems automatically trigger on those error

// When error comes in, it check is there a catch? to see if anything handling the error
// if no at all, runtime catch: oneerror() process.on("uncaughtException")