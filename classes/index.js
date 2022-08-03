const stack = new Stack()
const queue = new Queue()
const hashtable = new HashTable()

stack.push("1")
stack.push("2")

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
//queue.dequeue()

console.log("Stack", stack, "Queue", queue)

const reversedQueue = []
for(let i=0; i<=queue.length; i++){
    reversedQueue.push(queue.dequeue())   
}


console.log("reversed Queue", reversedQueue.reverse())
console.log("values", reversedQueue.values())

const values = reversedQueue.values()

for(const value of values){
    console.log("value", value)
}

hashtable.add("key1", 1)
hashtable.add("key2", 2)

console.log(hashtable.get("key2"))

console.log("hashtable")
console.log(hashtable)




function power(number, power){
    let num= number 
    while(power>1){
        num = number * num
        --power
    }
    return num
}

console.log("Factorial answer is", power(5,2))


function rpower(number, power){
   let num = number
    if(power <1){
        return
    }else{
        num = number * num
        rpower(number, power-1)
    }
    return num
}


console.log("Factorial answer is", rpower(10,2))