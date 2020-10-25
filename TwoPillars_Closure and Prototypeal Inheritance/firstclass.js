// Functions are first class citizens in JS
// This means 3 things
//1 

var stuff = function(){

}

//2
// You can pass function to another function, pass it around like data
function a(otherfunction){
    otherfunction()
}

a(function(){console.log('hi there')})

//3
// Return function as a value from other function

function b(){
    return function c(){
        console.log('bye')
    }
}

b();
b()();
var d = b()
d()