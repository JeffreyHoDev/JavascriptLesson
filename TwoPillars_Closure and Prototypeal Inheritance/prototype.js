let dragon = {
    name: 'Tanya',
    fire: true,
    fight(){
        return 5
    },
    sing(){
        if(this.fire){
            return `I am ${this.name}, the breather of fire`
        }
    }
}

dragon.sing()


let lizard = {
    name: 'Kiki',
    fight(){
        return 1
    }
}

const singLizard = dragon.sing.bind(lizard) // Borrow the method sing to lizard

// Imagine dragon is a very large object, we may want borrow a lot of method to lizard
// We can do these

lizard.__proto__ = dragon;
lizard.sing() // Now it works
lizard.fight() // Still 1 because already defined

lizard.isPrototypeof(dragon)

// Anything that already declared won't be inherit or get replaced

for(let prop in lizard){
    console.log(prop)
    // Base object gives this
    if(lizard.hasOwnProperty(prop)){
        console.log(prop) // name, fight...this is because lizard own property only has these
        // When JS engine cant find the prop, it will go up the prototype chain...to dragon....to base object
        // Prototype inheritance dont copy, it just go way up to look for it
    }
}


// But dont really use proto, it is bad in performance. In real life you dont really use it