// Try catch block
// it works like this
function fail() {
    try{
        console.log('this works')
        throw new Error('oh no')
    }
    catch(err){
        console.log('we have made an error')
    } finally{
        console.log('I still run')
    }
    console.log('!!!!!!!!!!!!!!') // this would never run, things only run in try catch
}

// We can nest this
try{
    try{
        DontHaveThisFunction() // But if you do async function here, we cant catch error. Because callstack remove it right?
        
    }catch(err){
        throw new Error(e)
    }
}
catch(err){
    console.log(err)
}