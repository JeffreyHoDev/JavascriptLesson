// Event loop has Callback Queue, which also known as Task Queue
setTimeout(() => console.log('1'), 2000)


// 2 - Promise, this is not really part of WebAPI
// Job Queue - Microtask Queue
// Smaller than callback queue, but has higher priority!!
Promise.resolve('hi').then((data) => console.log('2', data))

console.log('3')

//Console Log:
//3
//2hi
//1

