class StaticQueue{
 
    MAX
    end
    begin
    queue
    
    constructor(max)
    {
        this.MAX = max
        this.queue = new Array(max).fill(null)
        this.begin = 0
        this.end = 0
    }
    
    size()
    {
        return this.end
    }
    
    print()
    {
        let print = 'Queue: '
        let i = this.begin
        
        for(let temp = 0; temp < this.end; temp++)
        {
            print += ` ${this.queue[i]}`
            i = (i + 1) % this.MAX
        }
        
        console.log(print)
    }
    
    add(item)
    {
        if(this.end >= this.MAX) return false
        let position = (this.begin + this.end) % this.MAX
        this.queue[position] = item
        this.end++
        return true
    }
    
    remove()
    {
        if(this.end == 0) return false
        let element = this.queue[this.begin]
        this.begin = (this.begin + 1) % this.MAX
        this.end--
        return element
    }
    
    reset()
    {
        this.end = 0
        this.begin = 0
        this.queue = new Array(this.MAX).fill(null)
    }
    
   }
   
   const queue = new StaticQueue(5)
   queue.add(1)
   queue.add(4)
   queue.add(17)
   queue.remove()
   queue.add(3)
   queue.add(8)
   queue.print()