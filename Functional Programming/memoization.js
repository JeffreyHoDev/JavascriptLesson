function addTo80(n) {
    console.log('long time')
    return n + 80;
}

addTo80(5) // 85
addTo80(5)
addTo80(5)

// But if want to run this function again, we need copy to call it again
// Imagine if the function takes very long time

let cache = {}
function memoizedAddTo80(n) {
    if(n in cache) {
        return cache.n // properties access, which is a lot faster hash table
    }else {
        console.log('long time')
        cache.n = n + 80;
        return cache[n]
    }
}

memoizedAddTo80(5) // long time
memoizedAddTo80(5) // no more long time, using properties access

// Improve
// Ideally we dont want cache living outside the function, to not polluting global scope
function memoizedAddTo80() {
    let cache = {} // using closure
    return function(n) { // so this function still can access cache
        if(n in cache) {
            return cache.n // properties access, which is a lot faster hash table
        }else {
            console.log('long time')
            cache.n = n + 80;
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80() // function
console.log(memoized(5)) // 85