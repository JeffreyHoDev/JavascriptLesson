var b ={
    name: 'jay',
    say() {console.log(this)}
} // this = object b

var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
} // this = window object when c.say()()
// you get function when c.say() as defined that return

var d = {
    name: 'jay',
    say() {return () => console.log(this)}
} // this = object d, as it is lexically scope in the function