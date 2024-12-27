class SequentialListWithIOrder{
    
    MAX
    list
    size
    
    constructor(max)
    {
        this.MAX = max
        this.size = 0
        /* the list below must be used with sentinel */
        //this.list = new Array(this.MAX + 1).fill(null)
        this.list = new Array(this.MAX ).fill(null)
    }
    
    searchWithSentinel(value){
        let i = 0
        this.list[this.MAX] = value
        while(this.list[i] != value) i++
        if(i == this.MAX) return -1
        return i
    }
    
    binarySearch(element){
        let left = 0
        let right = this.size -1
        let middle
        
        while(left <= right)
        {
            middle = Math.floor((left+right)/2)
            if(this.list[middle] == element) return middle
            if(this.list[middle] < element)
            {
                left = middle + 1
            }else{
                right = middle -1
            }
        }
        return -1
    }
    
    addWithOrder(element) {
        if (this.size >= this.MAX) return false
           
        let pos = this.size
        while(pos > 0 && this.list[pos-1] > element)
        {
            this.list[pos] = this.list[pos-1]
            pos--
        }
        this.list[pos] = element
        this.size++
        return true
    }
    
    remove(element) {
        let index = this.binarySearch(element)
        if (index == -1) return false
        for (let j = index; j < this.size - 1; j++) {
            this.list[j] = this.list[j + 1]
        }
        this.list[this.size - 1] = null;
        this.size--
        return true
    }
}

const list = new SequentialListWithIOrder(4)

list.addWithOrder(2)
list.addWithOrder(1)
list.addWithOrder(4)
list.addWithOrder(3)