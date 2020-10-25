// Build hash table

class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i)% this.data.length
        }
        return hash
    }

    set(key, value){
        let address = this._hash(key)
        if(!this.data[address]){
            this.data[address] = []
            this.data[address].push([key, value])
        }
        
        this.data[address].push([key, value])

    }

    get(key){
        let address = this._hash(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
        // Most of the time should be O(1) actually in real life, unless you make the memory size super low
        // HashTable(2)
    }

    keys(){
        const keysArray = []
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray
        // See the downside here compare to array, hash tables need loop through all right?
    }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 10000)
myHashTable.set('apple', 3000)
myHashTable.set('oranges', 2)
myHashTable.get('grapes')
myHashTable.keys() // To list all our keys