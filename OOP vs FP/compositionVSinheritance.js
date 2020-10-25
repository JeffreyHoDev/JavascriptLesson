// Inheritance
/* 
    Structure - What it is
    Tight coupling problem
    Fragile base class problem
    Hierarchy problem 
*/



// Composition
/*
    Structure - What it has/does
*/
function getAttack(character) {
    return Object.assign({}, character, {attackFn: () => {}} )
}

function Elf(name, weapon, type) {
    let elf = {
        name,
        weapon,
        type
    }
    return getAttack(elf)
}

