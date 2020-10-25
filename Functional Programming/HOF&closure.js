// HOF
const hof = () => () => 5; // return a function
hof() // Function
hof()() // 5

const hof2 = (fn) => fn(5) // Takes a function
hof2(function a(x){return x}) // 5


// Closure
// function is first class citizen, so we can use closure
// WE create a closure whenever a function access variable at outisde of immediate function scope

const closure = function(){
    let count = 0;
    return function increment(){
        count++ // see this, we are modifying data outside of its own function
        return count; 
    }
}

const incrementFn = closure() // Function
incrementFn() //1
incrementFn() //2 