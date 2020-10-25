// Reverse the string
// My name is Jeff

function reverse(str) {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'Something is wrong with your input';
    }
    else{
        const length = str.length
        const holderArray = []
        for(let i= length-1; i >=0 ; i--){
            holderArray.push(str[i])
        }
        console.log(holderArray.join(''))
    }
}

reverse('My name is Jeff')


function reverse2(str){
    return str.split('').reverse().join('') // The reverse here is built in method of array
}


// ES6 syntax
const reverse3 = str => str.split('').reverse().join('')
const reverse3 = str => [...str].reverse().join('')