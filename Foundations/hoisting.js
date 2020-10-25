console.log('1------------');
console.log(teddy) // undefined
console.log(sing()) // This works
var teddy = 'bear';

//Function declaration
function sing() {
    console.log('ohhhh lalala')
}

//Function expression
var sing2 = function(){
    console.log('uhh lalala')
} // This can only be run after it is defined, so it wont work like sing()


(function sing() {
    console.log('ohhhh lalala')
}) // If you do it it wont hoisted, then sing will not work

// In most language, it doesnt work as JS
// Hoisting, JS engine allocate memory for variable and function when it see your code in creation phase before execute
// As long as it is reading the code and see keywords like var and function, here is what it will do:
// var teddy = undefined, JS engine already know teddy is a variable but dont know what yet
// function is fully hoisted, hoisting make it almost like fully go up first of the code

// Now if you change var to const or let, it won't hoisted. You will get error, you wont even see undefined

// Hoisting didnt really move up the code, it just reserve a memory for it when reading through the code