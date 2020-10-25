// ES6 Classes
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return 'attack with' + this.weapon
    }
}

// Beauty of Class, we are modelling real life

const peter = new Elf('Peter', 'stones') // peter is an instance of Elf
console.log(peter instanceof Elf) // true
// new keyword is instantiate the class
// this is syntatic sugar of JS, we dont really use classes like other programming language
// underneath the hood we are still using protypal inheritance


// Why we put attack outside instead of inside constructor?
// Everytime new got invoked, constructor get run, but attack is shared among the instances
// if we put inside constructor, that going to take up more memory space