// .padStart()
'Turtle'.padStart(10) // "    Turtle"


// .padEnd()
'Turtle'.padEnd(10) // "Turtle    "


const fun = (a,b,c,d,) => { // comma at end still valid
    console.log(a)
}

fun(1,2,3,4,)


let obj = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr.Grinch",

}
// Object.values
Object.values(obj).forEach(value => console.log(value))
// You get value of the object -- Santa, Rudolf, Mr.Grinch

// Object.entries
Object.entries(obj).forEach(value => console.log(value)) // ["username0","Santa"]


// Old time use Object.keys
Object.keys(obj) // Like this will make it becomes an array
Object.keys(obj).forEach((key,index) => {
    console.log(key, obj[key])
})



Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '') // This return Santa0, Rudolf1, Mr.Grinch2
})