// Pass by value
var a = 5; // JS engine simply copy primitive type value 5
var b = a; // b = 5, and move it into new memory space, they dont really have connection

b++;



// Pass by reference
let obj1 = {
    name: 'Yao',
    password: 123
}

let obj2 = obj1;

obj2.password = 'easybro'

console.log(obj1) // easybro
console.log(obj2) // easybro


// Same goes to array
var c = [1,2,3,4,5]
var d = c;
d.push(213456)
console.log(d) // with 213456
console.log(c) // with 213456

// This actually help save memory
// If you do want one own memory

var d = [].concat(c) // This clone it

// For object
let obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}

let clone = Object.assign({}, obj) // The arguments: empty(clone to), where the source
obj.c = 5;
//Another way is using spread operator
let clone2 = {...obj} 

// But if object inside has object
let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
}
obj.c = 5
// Previously method still fine
// But if you change the object value inside
obj.c.deep = 'hahahaha'
//All clones changed. The method clone only the first level, in deep is where it still reference to a memory

// The method for deep cloning, we use json
let superClone = JSON.parse(JSON.stringify(obj))

// Be careful when doing deep clone, it could have performance issue imagine if your object is very big data and deep