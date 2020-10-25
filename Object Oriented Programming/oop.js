// Consider we building a fairy tale game

const elf = {
    name: 'Orwell',
    weapon: 'bow',
    attack(){
        return 'attack with ' + elf.weapon
    }
}
// So if you want another elf, you might copy this code and create one more
// So try this, factory function
// Factory function is a function that create object for us
function createElf(name, weapon){
    return {
        name: name,
        weapon: weapon,
        attack(){
            return 'attack with' + weapon
        }
    }
}

const peter = createElf('Peter', 'stones')
const sam = createElf('Sam', 'fire')
// Still a problem, attack function is pretty generic, but if we got thousand elf even having same function, we got thousand attack in memory

// we can remove the function in the object
const elfFunctions = {
    attack() {
        return 'attack with' + this.weapon // you need this keyword for it refer to who calling it
    }
}

function createElf(name, weapon){
    return {
        name: name,
        weapon: weapon
    }
}

peter.attack = elfFunctions.attack

// We can do object.create too so we no need repeat thousand times assigning it
function createElf(name, weapon){
    let newElf = Object.create(elfFunctions)
        newElf.name = name,
        newElf.weapon = weapon

        return newElf
}

// Object.create() just create a link between elffunctions and newelf