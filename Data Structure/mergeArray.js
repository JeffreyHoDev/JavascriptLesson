function mergeSortedArrays(arr1, arr2){
    var sorted1 = arr1.sort((a,b) => a-b)
    var sorted2 = arr2.sort((a,b) => a-b)

    var concatArray = sorted1.concat(sorted2)
    return concatArray.sort((a,b) => a-b)

}

mergeSortedArrays([0,3,4,31], [4,6,30])
// [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1,arr2){
    const mergedArray = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1;
    let j = 1

    // Check input
    if(arr1.length === 0){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1;
    }

    while(arr1Item || arr2Item){
        if(arr1Item < arr2Item || !arr2Item ){ // To turn undefined to true
            mergedArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            mergedArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }

    return mergedArray
}