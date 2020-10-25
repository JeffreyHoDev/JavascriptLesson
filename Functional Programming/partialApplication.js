// Partial Application
// Partially apply function, process of producing function with smaller amount of parameters

const multiply = (a,b,c) => a*b*c;

// Curry version
const curriedMultiply = (a) => (b) => (c) => a*b*c;

// Partial Application
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(4,10) // 200