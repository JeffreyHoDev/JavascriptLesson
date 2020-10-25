// allSettled()

const promiseOne = new Promise((resolve,reject) => {
    setTimeout(resolve, 3000)
})
const promiseTwo = new Promise((resolve,reject) => {
    setTimeout(reject, 3000)
})

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(console.log)
 // Promise undefined
// Promise.all only resolve if all promises resolved, not reject


// new Feature
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
    .catch(console.log)
// You will get response, it doesnt care about resolve or reject.
// Wait until all promises return