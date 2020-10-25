(async function(){
    try {
        await Promise.resolve('oh no')
        await Promise.reject('oh no number 2')
    }
    catch(err) {
        console.log(err)
    }

    console.log('this is still good') // this get run too

})()