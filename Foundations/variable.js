function two(){
    var isValid; //undefined
}

function one(){
    var isValid = true; // local variable environment
    two() // new execution context
}

var isValid = false;
one()


//So the call stack is like
/* 

    two() -- undefined to isValid
    one() -- true to isValid
    global() -- false to isValid
*/