class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return 'attack with' + this.weapon
    }
}

const fiona = new Elf('Fiona', 'ninja starts')
const ogre = {...fiona} // try ogre.__proto__, it should be undefined, it loss the base class Elf, 
// while Fiona still have ,so it is not really the same. ogre dont have attack too


class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        return 'attack with' + this.weapon
    }
}

class Elf extends Character {
    // This is what we called sub-classing
    constructor(name, weapon, type){

        this.type = type
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house') // Error, need call super constructor

//So we need do this
class Elf extends Character { // This is telling Elf.__proto__ link to Character prototype
    // This is what we called sub-classing
    constructor(name, weapon, type){
        super(name, weapon) // upper level of Elf, which is Character. This is something only Elf will run, not the Character
        this.type = type
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color
    }
    makeFort(){ // we create own method for ogre class
        // this is same as extending our protype right
        // Ogre.prototype.makeFort = something
        return 'Strongest Fort in the world made'
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house') // now it works

// Power of inheritance
const shrek = new Ogre('Shrek', 'club', 'green')
shrek.attack()
shrek.makeFort()

dolby.makeFort() // Error

console.log(Ogre.isPrototypeOf(shrek)) // false, Ogre is constructor function
console.log(Ogre.prototype.isPrototypeOf(shrek)) // true
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)) //true

console.log(dolby instanceof Elf) // true
console.log(dolby instanceof Character) // true
// instance is when we use new keyword a class
// inheritance doesnt actually copy, it simply links up the prototype chain