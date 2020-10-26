// flat(), used on array

const array = [1,2,3,4,5]
array.flat() // return a new array same

const array1 = [1,[2,3],[4,5]]
array1.flat() // [1,2,3,4,5]

const array2 = [1,2,[3,4,[5]]]
array2.flat() // [1,2,3,4,[5]]  -- flat remove one layer of array, default for its parameter is 1

array2.flat(2)
array2.flat(100) // just give a very large number if you want to flat very very nested array


const entries = ['bob', 'sally',,,,,,,,'cindy']
entries.flat() // ['bob','sally', 'cindy']


const newArray = array2.flatMap(creature => creature + 'something here') // return with adding something here at end of each element

let userEmail = '                eddyomg@gmail.com'
let userEmail2 = 'johnny@gmail.com               '

userEmail.trimStart() // trim start of string
userEmail2.trimEnd() // trim end of string


// fromEntries - Convert array to object
// Object.entries do the opposite
let userProfile = [['commanderTom', 23], ['derekZlander', 40], ['hansel',18]]
Object.fromEntries(userProfile) /*

{
    commanderTom:23,
    derekZlander: 40,
    hansel: 18
}

*/