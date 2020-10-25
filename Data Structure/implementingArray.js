// Building array yourself
// At the end of the day, data structure is something we can build from scratch
class myArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem;
    }

    delete(index){
        const item = this.data[index]
        this.shiftItem(index)
        return item;
    }

    shiftItem(index){
        for(let i = index; i < this.length -1 ; i++){
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length-1]
        this.length--
    }
}

const newArray = new myArray()
newArray.push('item A')
console.log(newArray)

newArray.pop()