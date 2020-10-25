let view;
function initialize(){
    view = 'something';
    console.log('view has been set')
}

initialize()
initialize()
initialize()
console.log(view)

// said initialize shall be call only once

let view;
function initialize(){
    let called = 0;
    return function(){
        if(called > 0 ){
            return;
        }
        else {
            view = 'something';
            called++
            console.log('view has been set')
        }
    }
}

const startOnce = initialize()
startOnce()
startOnce()
startOnce()
console.log(view) // so this only show once


// Exercise 3
const array = [1,2,3,4]
for(var i =0; i < array.length;i++){
    setTimeout(function(){
        console.log('i am at index' + array[i])
    }, 3000)
}
// How to get 1,2,3,4
const array = [1,2,3,4]
for(let i =0; i < array.length;i++){
    setTimeout(function(){
        console.log('i am at index' + array[i])
    }, 3000)
} // let allows us to use block scoping, if use var you have a global scope

const array = [1,2,3,4]
for(var i =0; i < array.length;i++){
    (function(closureI){
        setTimeout(function(){
            console.log('i am at index' + array[closureI])
        }, 3000)
    })(i)
}