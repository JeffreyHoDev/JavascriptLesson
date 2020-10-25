// currying
const multiply = (a,b) => a*b

const curryMultiply = (a) => (b) => a*b; // This is currying
// Currying simply means make your function take one parameter at a time, instead of one function take multiple parameters

curryMultiply(5)(4)

// Why is this useful
/* 
    You can create multiple useful utilities now for specific function
    
*/

const curryMultiplyBy5 = curryMultiply(5)