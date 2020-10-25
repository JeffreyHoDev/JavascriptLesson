1 == '1' // true
// JS engine do convert a certain type to another type
// In JS, type coercion happen when you use ==, it try to coerce 1 to the same type

1 === '1' // false
// === dont do coercion

// Not working, coercion change 0 to false
if(0) {
    console.log(5)
}


// in JS there is concept of -0 and +0
-0 === +0 // true
Object.is(-0,+0) // false 