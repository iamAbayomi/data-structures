class HashTable {
    constructor(){
        this.hashtable = new Map()
    }

    get length(){
        return this.hashtable.length
    }

    add(key, value){
        let temp = this.hashtable
        this.hashtable = {...temp ,key, value}
    }

    get(key){
        return this.hashtable[key]
    }

    isEmpty(){
        return this.length === 0
    }
}