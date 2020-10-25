// Memory efficient

function heavyDuty(index){
    const bigArray = new Array(7000).fill('ok') //Just fill up array 7000 times
    console.log('created')
    return bigArray[index]
}

heavyDuty(688)
// imagine you need to call this function many many times
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
// It destroy, create,destroy, create, not memory efficient, bigArray keep initiated
// Instead we can do this

const getHeavyDuty = heavyDuty2();

function heavyDuty2() {
    const bigArray = new Array(7000).fill('ok') //Just fill up array 7000 times
    console.log('created again!')
    return function(index){
        return bigArray[index]
    }
}

heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
heavyDuty(688)
getHeavyDuty(688)
getHeavyDuty(700)
getHeavyDuty(800)
getHeavyDuty(111)

// You will see created log 4 times, created again! only 1 time