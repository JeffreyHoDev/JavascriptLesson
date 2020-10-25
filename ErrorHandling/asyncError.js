// handle promise error

Promise.resolve('asyncfail')
.then(response => {
    throw new Error('#1 fail') // silent fail
    return response // Here wont run if error occurs
}) 
.then(response => {console.log(response)})
.catch(err => err)
.then(response => console.log(response.message)) // Error here
.catch(err=>console.log(err)) // this never will run as the first catch will grab it and handled. unless in your first catch got another throw error


Promise.resolve('asyncfail')
.then(response => {
    Promise.resolve().then(() => {
        throw new Error('#3 fail') // final error, but not good as the error handling outside of it, need go up stack
    })
}) 
.then(response => {console.log(response)})
.then(response => console.log(response.message))
.catch(err=>console.log(err, 'final error')) 
// For this case, add catch for the #3 fail, final error will still run. Because you return the error as response and is an error


// It is better to catch error for each promise