// Instead of using IIFE, CommonJS and AMD comes out
// CommonJS
var module1 = require('module')

function fight(){

}

module.exports = {
    fight: fight
}

// NodeJS is still using this, CommonJS is design to used in server before too
// NPM - node package manager, a way for people to share modules
// Not ideal when we need to load all the modules before we can run our function

// Browserify
// In command browserify script.js > bundle.js - this bundle.js will be all scripts in my code
// This is called module bundler, webpack did this too

// AMD
define(['module1', 'module2'],
function (module1Import, module2Import){
    var module1 = module1Import
    var module2 = module2Import
    
    function dance(){

    }

    return {
        dance:dance
    }
})
// Basically it do the same thing
// RequireJS, was the main way people use AMD module