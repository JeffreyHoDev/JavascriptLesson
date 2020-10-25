let user = {
    age: 54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('ahhhhh!')
    }
}

// All of them are going to be stored in different addresses
// now accessing them is fast
user.age // O(1)
user.spell = 'oh my god!' // O(1)
user.scream()


// O(n/k) where k is size of hash table


// In ES6
// We got something called Map and Sets

const a = new Map() // Allow you to save any data type as keys, normally object store string as key only
// Advantage of Map maintain order of insertion

const b = new Set() // Similar to map, but it only store the key, no value