const basket = ['apples', 'oranges', 'grapes']
// What we are doing is called iterating, simply means we able to go one by one through item like basket in this case
// for of
for(item of basket){
    console.log(item)
}
// We can do for strings too

// for in
// this works with object
let object = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// for in let us see the object properties
// This is not called iterating, this is called enumerating
// Properties of object are called enumerable
// You can use for in for array too, but for of cant use in object
for(item in object){
    console.log(item) // apples,oranges,grapes
}