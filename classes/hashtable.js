class HashTable {
    constructor(){
        this.hashtable = new Map()
    }

    get length(){
        return this.hashtable.size
    }

    add(key, value){
        this.hashtable.set(key, value)
    }

    get(key){
        return this.hashtable.get(key)
    }

    isEmpty(){
        return this.length === 0
    }
}