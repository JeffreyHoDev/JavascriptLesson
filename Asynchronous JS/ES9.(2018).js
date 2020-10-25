// Object spread operator

const zoo = {
    tiger: 23,
    lion: 10,
    monkey: 15,
    bird: 40
}

const { tiger, ...rest } = zoo; 
/*
    tiger = 23;
    rest = {
        lion: 10,
        monkey: 15,
        bird: 40
    }
*/

const array = [1,2,3,4,5]
function sum(a,b,c,d,e) {
    return a+b+c+d+e;
}

// we can do
sum(...array)

function objectSpread(p1,p2,p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest } = zoo; 

objectSpread(tiger, lion, rest)