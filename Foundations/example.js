// It breaks it to different parts
function JSengine(code){
    return code.split(/\s+/)
}

// Inline caching
function findUser(user) {
    return `found ${user.firstname} ${user.lastname}`
}

const userData = {
    firstname: 'John',
    lastname: 'Junior'
}

findUser(userData)
// If compiler see this repeated, it will actually just generate "found John Junior"



// hidden classes
function Animal(x,y) {
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

// This makes compiler slower, deoptimized the code. If you didnt put it in order, compiler think that is seperate
