function a(){
    console.log('hi')
}

a.call() // hi
// Actually underneath the js, call is there to be used to invoke function

a.apply() // hi, same as call....for now
//////////////////////////////////////////////////////////////////////////////

const wizard = {
    name: 'Merlin',
    health: 100,
    heal() {
        return this.health = 100;
    }
}

const archer = {
    name: 'Robin Hood',
    health: 30
}

wizard.heal() // work, 100

console.log('1', archer)
wizard.heal.call(archer) // Archer borrow the heal
console.log('2', archer)


// consider heal function gives heal(num1, num2)
wizard.heal.call(archer, 50, 30) // you can add parameters in following arguments

// Same as apply(), the difference is apply use array as parameters
wizardd.heal.apply(archer, [50,30])



// Bind
// Bind returns a function instead of value like call and apply, so will be used later
wizard.heal.bind(archer) // doesnt run the function

const healArcher = wizard.heal.bind(archer)
healArcher() // Then this works