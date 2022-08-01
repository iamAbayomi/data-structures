const stack = new Stack()
const queue = new Queue()

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