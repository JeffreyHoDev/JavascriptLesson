// this keyword - 4 ways
// new binding this
function Person(name, age) {
    this.name = name;
    this.age = age
}

const person1 = new Person('Xavier', 55)

// implicit binding
const person = {
    name: 'Karen',
    age: 40,
    hi(){
        console.log('hi' + this.name)
    }
}

// explicit binding
const person3 = {
    name: 'Karen',
    age: 40,
    hi: function(){
        console.log('hi' + this.setTimeout)
    }.bind(window) // explicitly tell this bind to what
}

// arrow function
// with arrow function, we can use this in lexical scoping, this normally is dynamic scoping without arrow function
const person4 ={
    name: 'Karen',
    age: 40,
    hi: function(){
        var inner = () => {
            console.log('hi' + this.name)
        }
        return inner()
    }
}