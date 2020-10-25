const promise = new Promise((resolve,reject) => {
    if(true){
        resolve('Stuff works!')
    }
    else {
        reject('Error!')
    }
})

const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 100, 'Hii')
})

const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve,reject) => {
    setTimeout(resolve, 3000, 'Look for me?')
})

Promise.all([promise, promise2, promise3, promise4]) // This will wait until all promises are resolved
    .then(values => {
        console.log(values)
    })

Promise.all([promise, promise2, promise3, promise4]) // This will wait until all promises are resolved
.then(values => {
    console.log(values)
}) // This will run a lot faster (Almost instant) than before, because of declaring promise to a variable, you had ran before

// In promise.all, if one error, the action stop

promise
    .then(result => console.log(result))
    .then(result2 => console.log(result2))
    .catch(console.log) // Catch only catch error if anything before it fail