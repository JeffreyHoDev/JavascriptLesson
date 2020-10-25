// IIFE

// This pattern, we can put all library code
(function(){

})();

// First thing it see it is a function expression
// Then anonymous function then invoke (Only function expression can do this)
// This, no global property is created


// What if

(function(){

}()) // This is still okay, immediately run it



var script1 = (function(){
    function a(){
        return 5
    }
})()