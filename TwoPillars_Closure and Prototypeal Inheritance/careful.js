// Careful to not initialize function inside a loop
for(let i = 0; i< 5; i++){
    function a(){

    }
    a()
}

// It is better initialize it just once before come into loop


// Careful for function that return a variable
function a(){
    return param
}

a() // Error because undefined, this will cause it go search up through scope chain

// Better way is pass a parameter to the function into its own variable environment