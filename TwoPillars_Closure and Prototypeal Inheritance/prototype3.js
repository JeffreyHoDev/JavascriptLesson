// Dont use __proto__
// Safer way to do it

let human = {
    mortal: true
}

let socrates = Object.create(human)
socrates.age = 45;
console.log(socrates.mortal) // true, it exist