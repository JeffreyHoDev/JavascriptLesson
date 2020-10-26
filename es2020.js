// BigInt
// big int is a new data type in JS
typeof 123456789087654321234567891234567890076521234567890987656789 // number
typeof 1n // put letter. 
// JS got something called max safe integer, there is a limit to number actually
Number.MAX_SAFE_INTEGER // give you max integer in JS, try plus 10 after this

// Big int is used when we want to use something larger than this
Number.MAX_SAFE_INTEGER - 1n
Number.MAX_SAFE_INTEGER+'n' +10n

///////////////////////////////////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator ??
let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}

let power = andrei_pokemon?.pikachu?.power || 'no power' // imagine if we not sure we have this properties for the pokemon, we cant do the
// optional chaining because it doesnt make sense right
// So most of the time we will do or operator

// If power is empty string, power still 'no power' because or operator will look through all are false or not using optional chaining operator

// lets say we use power = 0 inside object, the previous one will give you no power
// Imagine we just want to see whether it is null or undefined
// so use nullish coalescing operator, 0 will still be shown or null also can
let power = andrei_pokemon?.pikachu?.power ?? 'no power' //0



///////////////////////////////////////////////////////////////////////////////////////////////
// Optional Chaining Operator ?.
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

// Normally we assign this way
let weight = will_pokemon.pikachu.weight

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

let weight2 = andrei_pokemon.pikachu.weight // error

// old time - doing this so we can check do we have it, not giving error
if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
    let weight2 = andrei_pokemon.pikachu.weight
} else {
    let weight2 = undefined
}

// new way
let weight3 = andrei_pokemon ?.pikachu?.weight // it check all of this, check do we have andrei pokemon, then do we have pikachu ...
// It check for properties with the question mark
////////////////////////////////////////////////////////////////////////////////////////////////////
// Promise.allSettled
////////////////////////////////////////////////////////////////////////////////////////////////////

// globalThis
// It is the global variable that we now get
// In browser console, globalThis is Window object