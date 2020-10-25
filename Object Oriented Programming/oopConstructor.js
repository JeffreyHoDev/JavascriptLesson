// Constructor functions
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
// Only use this keyword can add properties created

Elf.prototype.attack = function(){
    return 'attack with' + this.weapon
}

const sam = new Elf('Sam', 'fire') // the sam is here is just object, not function, so you dont have prototype properties
// The new keyword automatically returns the object from a function
// Any function that is invoke using new keyword is called constructor function
// Example, new Function,
// good practice use capital letter for constructor function 
// so when new invoke it, the this keyword get bind to who called it (The calling object)
// since it is a function, so it got a prototype property.
// And so the attack function we only need once in memory, got used by multiple item

var a = new Number(5) // return object. [Number: 5]
var b = 5 // 5, a number

// Two diff ways of constructing in JS
// How actually b.toString() even though it is just primitive type
// In JS, when we assign a variable, it internally is going to construct the Number
// Technically b underneath use new Number