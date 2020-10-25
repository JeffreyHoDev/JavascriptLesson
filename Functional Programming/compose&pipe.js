// compose or composition
// any sort of data transformation should be obvious
// data -> fn -> data -> fn

// compose not actually inside JS.
// Ramda library has compose
// compose take in multiple function into one

const compose = (f,g) => (data) => f(g(data)) // own built compose

const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

multiplyBy3AndAbsolute(-50)


// Pipe
// is essentially same thing, but instead of right to left, it goes left to right
const pipe = (f,g) => (data) => g(f(data)) // f run first, g run last


// Arity - numbers of arguments a function take
// Practice with creating function with one or two parameters only