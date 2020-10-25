// immutability
const obj = {name: 'Andrei'}

function clone(obj){
    return {...obj} // this is pure
}

obj.name = 'Nana' // this is mutating the state
// We can change thing inside our function, but better dont change outside the function

// ideally do this
function updateName(obj){
    const obj2 = clone(obj)
    obj2.name = 'Nana'
    return obj2
}

const updatedObj = updateName(obj) 
console.log(obj, updatedObj) // Andrei , Nana

// There is one thing call structural sharing
