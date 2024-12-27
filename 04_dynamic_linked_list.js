const print = (arg) => console.log(arg)

class Node{
    constructor(element)
    {
        this.element = element
        this.next = null
    }
}

class DynamicLinkedList{
    
    constructor()
    {
        this.head = null
        this.size = 0
    }
    
    add(element)
    {
        const node = new Node(element)
        
        if(this.head == null)
        {
            this.head = node
        }else{
            let current = this.head
            
            while(current.next)
            {
                current = current.next
            }
            
            current.next = node
        }
        this.size++
    }
    
    search(element)
    {
        let current = this.head
        
        while(current != null)
        {
            if(current.element == element)
            {
                return current
            }
            current = current.next
        }
        return null
    }
    
    remove(element)
    {
        let current = this.head
        let previous = null
        
        while(current != null)
        {
            if(current.element == element)
            {
                if(previous == null){
                    this.head = current.next
                }else{
                    previous.next = current.next
                }
                this.size--
                return true
            }//end if
            previous = current
            current = current.next
        }
        return false
    }
    
    length()
    {
        return this.size
    }
    
    printList()
    {
        let current = this.head
        let listString = ""
        while(current !== null)
        {
            listString += `${current.element} -> `
            current = current.next
        }
        
        listString += " null"
        console.log(listString)
    }
}

const list = new DynamicLinkedList()

list.add(1)
list.add(2)
list.add(4)
list.add(3)

list.remove(4)

list.printList()
print(list)