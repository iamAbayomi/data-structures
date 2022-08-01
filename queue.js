class Queue{
    constructor(){
        this.queue =[]
    }

    get length(){
        return this.queue.length
    }

    enqueue(item){
        this.queue.push(item)
    }

    dequeue(){
        this.queue.shift()
    }
    
    peek(){
        return this.queue[0]
    }

    isEmpty(){
      return  this.length == 0 ? true : false
    }
}
