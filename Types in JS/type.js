// Primitive
// Primitive means it is data that is only single value
typeof 5; // numbers
typeof true; // boolean
typeof 'string here'; //string
typeof undefined; // undefined
typeof null; // object
typeof Symbol('just something'); // symbol, used for object properties so it is unique (new in ES6)

// Non-primitive
// They doesnt have the value there directly, simply a reference
typeof {}; // object
typeof []; //object
typeof function(){} ; // function, underneath the hood, function is just object, we dont really have function type

function a(){
    return 5
}

a.hi = 'hello there'
console.log(a.hi) // this works, because underneath the hood, function is object

// To test something is it an array (Since typeof cannot show it is array)
Array.isArray()
// Array is array constructor, give in an array in isArray(). Eg: isArray([1,2,3,4]), will return true


// undefined is absence of definition, well there is variable there but no value there
// null is absence of value