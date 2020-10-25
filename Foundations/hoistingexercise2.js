var favouriteFood = "grapes";

var foodThoughts = function(){
    console.log("original favourite food: " + favouriteFood)

    var favouriteFood = "sushi"
    console.log("new favourite food: " + favouriteFood)

}

foodThoughts()

// original food => undefined
// Hoisting happens on every execution context, then go through creation phase and execution phase again
/* Here what happens in hoisting:
    1. var favouriteFood = undefined; So it is hoisted
    2. var foodThoughts = undefined;
    3. Above two in creation phases
    4. Now execution phase
    5. when foodThoughts run, it create execution context
    6. So hoisting happens, here is what happen:
    7. var favouriteFood = undefined (Hoisting and nothing more to hoist inside the code) - Creation phase
    8. executing original food
    9. assign the favouriteFood to sushi
    10. execute new favourite food

    Hoisting seems making code unpredictable, so recommend not to use var. Use const, let
*/