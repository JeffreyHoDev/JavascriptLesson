var one = 1;
var one = 2;

console.log(one)

// In hoisting
// one = undefined
//////////////////////////////////////////////////////////////////

a()

function a(){
    console.log('hi')
}


function a(){
    console.log('bye')
}

// you get bye, function is fully hoisted