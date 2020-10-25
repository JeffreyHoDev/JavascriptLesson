// We have not worry to have function and its variable influence other function, because the scope
// Means this is completely manageable, we do one function at a time
// We need a way to exchange data between function right?
// Tight Coupling
// One may affect other, imagine your code is upgrading over time, global name space pollute possible


// JS has things called ES module today, but how about before?



// First way of using module concept:
// Global scope, Module Scope, Function Scope, Block Scope (Order from High to Low level)
// We actually have module scope, can be explicit
// Module Pattern
// IIFE
(function(){
    // We still can use global variable, accessible,
    // while creating private variable for itself
    // The variable and function here cant be accessed from global
    // If do want to be accessible, assign this whole thing to a variable
    var harry = 'potter'
    var voldemort = 'ok ok'

    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random()*char1.length)
        var attack2 = Math.floor(Math.random()*char2.length)
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }
    fight(harry,voldemort)
})() // Executing

var Module = (function(){
    // if do want return something, return it. You dont have to return some variable or function that you dont want
    // other to access when using it in global
    var harry = 'potter'
    var voldemort = 'ok ok'

    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random()*char1.length)
        var attack2 = Math.floor(Math.random()*char2.length)
        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
    }

    function privateFunction(){

    }

    return {
        fight: fight
    }
})()

// You can use something from global variable put in as argument of IIFE, that way you can access and changing it without affect outside
// of function. Why is this so?
// When argument comes in, they will look is the variable exist in local scope. Yes, then it wont go up the global scope to look for it

// But still got issue, Module itself is at global isnt it?
// Another issue during old time, is the order of script tag matter in overwriting right? (Including the variable as argument also)