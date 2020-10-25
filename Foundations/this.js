// this

function a(){
    console.log(this) // refer to window, function is property of Window object
}

function b(){
    'use strict'
    console.log(this) // undefined
}


// Why still got this in own execution context
const obj = {
    name: 'Billy',
    sing: function(){
        return 'lalalala' + this.name // Remember, this is the object that the function is property of
        
    },
    singAgain: function(){
        return this.sing() + '!' // The advantage of this, makes you didnt repeat writing
    }
}

obj.sing() // this is to the left of the dot



// Weird 

const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this)
        var anotherFunc = function(){
            console.log('b', this) // Window object
            // this is because this keyword not lexical scope, it doesnt matter where you written, 
            // it matters on how you call the function
            // anotherFunc is ran inside sing(), obj didnt really call that function
            // then window object is in default, so this refer to window object
        }
        anotherFunc()
    }
}

obj.sing()

// To solve this
// in ES6, use arrow function, it is lexically bound
// Another way before arrow function, return anotherFunc.bind(this)
// Another way, assign a variable with this (refer to obj), then pass it