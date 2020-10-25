function weird(){
    height = 50;
    return height;
}

weird()

// This height is in global variable, this is because when weird execute, scope see there is no inside its lexical because it doesnt see var or function
// So global also didnt, but it wont throw the error, so take it in global

// This can cause problem, so people use 'use strict' at top of code to ensure all written correctly



var heyhey = function doodle(){
    // do something
    return 'heyhey'
}

heyhey() // This is expected
doodle() // This got reference error, this is because doodle function is actually enclosed in its own scope
// it is in its own execution context, so you cant access it in global, so you need to run doodle inside doodle