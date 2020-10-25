function one(){
    return 1
}

one() // First way to invoke function

const obj = {
    two : function(){
        return 2
    }
    // or two(){
    // return 2
    // }
}

obj.two()

function three(){
    return 3
}

three.call()

// Below might me rare to see
const four = new Function('return 4') // This is function constructor
four()

const four = new Function('num', 'return num')

function woohoo(){
    console.log('wohooo')
}

wohoooo.yell = 'ahhhhh' // It actually create this 
/* 
    specialObj = {
        yell: 'ahhh',
        name: woohoo,
        (): 
    }

    Functions are callable object, not a regular object. You get properties like call apply bind, we can also store them as
    data 
*/