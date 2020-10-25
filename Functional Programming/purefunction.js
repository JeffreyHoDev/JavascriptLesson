// no side effects
// input --> output

const array = [1,2,3]

function a(arr) {
    arr.pop() // side effect
}

a(array) // side effect
console.log(array) // It did mutate data outside itself


// so how to do?
// Create new array

function removeLastItem(arr) {
    const newArray = [].concat(arr); // Not same as assigning, you got new copy of array
    newArray.pop()
    return newArray
}

function multiplyBy2(arr) {
    return arr.map(item => item*2)
}

//Same input gives same output
function a(num1, num2) {
    return num1 + num2;
}

a(3,4) // Referential Transparency, it means if I completely change this function to number 7, is it going to affect the program 

function b(num) {
    return num*2;
}

b(a(3,4)) // So no, it doesnt change the program