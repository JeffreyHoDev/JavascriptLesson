/*
    Higher order functions are simply function that can take function as argument or
    a function that return another function
*/

function letAdamLogin(){
    let array = [];
    for(let i=0; i < 100000; i++){
        array.push(i)
    } // Just simulate a very long process, just imagine this is an authentication process company using

    return 'Access Granted'
}

letAdamLogin()

function letEvaLogin(){
    let array = [];
    for(let i=0; i < 100000; i++){
        array.push(i)
    } // Just simulate a very long process, just imagine this is an authentication process company using

    return 'Access Granted: Eva'

}

letEvaLogin()
// The problem here is, you repeat yourself

// Consider take in parameters
function letUserLogin(user){
    let array = [];
    for(let i=0; i < 100000; i++){
        array.push(i)
    } // Just simulate a very long process, just imagine this is an authentication process company using

    return 'Access Granted:' + user

}

letUserLogin('Adam')

// Make it cleaner
const giveAccessTo = (user) => {
    return 'Access granted to' + user
}

// Now you can just write
function letUserLogin(user){
    let array = [];
    for(let i=0; i < 100000; i++){
        array.push(i)
    } // Just simulate a very long process, just imagine this is an authentication process company using

    return giveAccessTo(user)

}

letUserLogin('Eva')
// We have more flexibility and control, but here got one more problem
// imagine we need to have admin login access which takes more time, we need add one more function
function letAdminLogin(admin){
    let array = [];
    for(let i=0; i < 500000; i++){
        array.push(i)
    } // Just simulate a very long process, just imagine this is an authentication process company using

    return giveAccessTo(admin)

}


// Higher order function
// We declare one more function to replace the process
function authenticate(verify){
    let array = [];
    for(let i=0; i < verify; i++){
        array.push(i)
    }
    return true;
}

function letPerson(person, afunction){
    if(person.level==='admin'){
        afunction(50000)
    }else if(person.level === 'user'){
        afunction(1000)
    }
    return giveAccessTo(person.name)
}

// Cleaner
letPerson({level:user, name: 'Tim'}, authenticate)
// Created a generic function, you have more flexibility and control


// Higher order function
const multiplyBy = (factor) => {
    return (value) => {
        return factor* value
    }
}

//or 
const multiplyBy = (num1) => (num2) => num1*num2;

let multiplyByTen = multiplyBy(10)
console.log(multiplyByTen(2))