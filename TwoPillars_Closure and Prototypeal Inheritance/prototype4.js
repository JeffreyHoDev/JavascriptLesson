/*
    the only time we use prototype method, is when we do constructor
*/

const obj = {} // underneath the hood, JS create the object by using Object constructor

// Object is a function actually

// Every function has a prototype property and it references to an object used to attach properties
// that will be inherited by objects further down the prototype chain

// Object is function because it has .prototype... this is the last before you reach null

// Only function has prototype property. Try check with obj.prototype and array.prototype, they will be undefined

//Exercise

// Date object => to have new method .lastYear() which shows last year 'YYYY' format
new Date('1990-10-10').lastYear()
// '1899'

Date.prototype.lastYear = function(){
    return this.getYear() - 1;
}

// If use arrow function, you will have error, because this will become lexical scope to date object, not the prototype

//modify .map() to print 'ok' at the end of each item
console.log([1,2,3].map())


// Solution
Array.prototype.map = function(){
    let array = [];
    for(let i = 0; i < this.length; i++){
        array.push((this[i]+ 'ok'))
    }
    return array
}

