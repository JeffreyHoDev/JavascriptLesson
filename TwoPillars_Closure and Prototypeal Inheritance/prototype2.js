const obj =  {
    name: 'Sally'
}

obj.hasOwnProperty('name') // true
obj.hasOwnProperty('hasOwnProperty') //false

function a(){

}

a.hasOwnProperty('call') // false, false to bind and apply too - is not from a itself
a.hasOwnProperty('name') // true

// a.__proto__  is the same as Function.prototype
// __proto__ is simply a reference point to a prototype