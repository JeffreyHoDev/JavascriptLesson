// Given array = [2,5,1,2,3,5,1,2,4], should return which one got repeat first
// answer = 2

function checkFirstRecur(array){ // O(n^2)
    const length = array.length;
    for(i=0; i < length; i++){
        for(j=i+1; j < length; j++){
            if(array[i] === array[j]){
                return array[i]
            }
        }
    }
    return undefined 
}

// Given [2,3,4,5]
// return undefined

// Using hash table
function version2(array){ // O(n)
    let map = {}
    for(let i=0; i< array.length; i++){
        if(map[array[i]] !== undefined ){ // if(0) gives undefined due to type coercion 
            return array[i]
        }else{
            map[array[i]] = i
        }
    }
    console.log(map)
    return undefined
}

function checkFirstRecurToVersion2(array){
    const length = array.length;
    for(i=0; i < length; i++){
        for(j=i+1; j < length; i++){
            if(array[i] === array[j]){
                return array[i]
            }
        }
    }
    return undefined 
}