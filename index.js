const stack = new Stack()
const queue = new Queue()

stack.push("1")
stack.push("2")

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()

console.log("Stack", stack, "Queue", queue)