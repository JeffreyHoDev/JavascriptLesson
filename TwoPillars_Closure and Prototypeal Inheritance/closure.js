function a(){
    let grandpa = 'grandpa'
    return function b(){
        let father = 'father'
        return function c(){
            let son = 'son'
            return `${grandpa} ${father} ${son}`
        }
    }
}

a() // Function b
a()() // Function c
a()()() // 'grandpa' 'father' 'son'
// Why son somehow remember grandpa?

/*
    Function a has chain to global, a special closure box (Just in memory heap, not call stack) 
    contain grandpa because there is still something referencing it,
    garbage collector wont clean it up

    Callstack => a popoff => b popoff => c popoff
    Closure are also called lexical scoping
*/


function boo(string) {
    return function(name){
        return function (name2){
            console.log(`${string} ${name} ${name2}`)
        }
    }
}

boo('hi') // function
boo('hi')('time') // function
boo('hi')('time')('ok')

//Exercise
function callMeMaybe(){
    const callMe = 'Hi, I am here';
    setTimeout(function(){
        console.log(callMe)
    }, 4000)
}

callMeMaybe()
// see callMe variable still remembered, because of closure