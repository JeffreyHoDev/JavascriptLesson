// call stack + memory heap


// Memory Heap
const number = 600; // allocate memory for number
const string = 'some text' // allocate memory for string
const human = {
    first: 'John',
    last: 'Junior'
} // allocate memory for an object and its values



// Call Stack

function subtractTwo(num) { // Allocate this function to memory
    return num-2;
}

function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal); 
} // Allocate this function to memory
debugger;

calculate() // Call Stack is region in memory is in first in last out mode, try copy this into google chrome script snippets


// Recursion is simple to show example of stack overflow

function inception(){
    inception()
}


// Garbage Collection - Mark and Sweep
var human1 = {
    first: 'John',
    last: 'Junior'
}

human1 = 5; // we dont need the first and last and their respective values anymore


// Memory Leak
var array = [];
for(i=5;i>1;i++){
    array.push(i-1)
}


// Global variable
var a = 1;
var b = 1;
var c = 1; // These are 3 seperate memory allocate

// Event Listener
var element = document.getElementById('button')
element.addEventListener('click', onClick) // This can cause memory leak too, since you dont remove it and only keep adding

// setInterval
setInterval(()=> {
    // referencing objects...
})

// This cause memory leak too if we keep referencing something inside interval, objects within setInterval didnt get garbage collected