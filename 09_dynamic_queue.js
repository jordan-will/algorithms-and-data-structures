class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class DynamicQueue {

    end
    begin

    constructor() {
        this.begin = null
        this.end = null
    }

    size() {
        let end = this.begin
        let size = 0
        while (end != null) {
            size++
            end = end.next
        }
        return size
    }

    print() {
        if (this.begin == null) {
            console.log('The queue is empty')
            return
        }

        let print = "Queue: "
        let end = this.begin
        while (end != null) {
            print += ` ${end.value}`
            end = end.next
        }

        console.log(print)
    }

    add(item) {
        const newNode = new Node(item)
        newNode.next = null
        if (this.begin == null) {
            this.begin = newNode
        } else {
            this.end.next = newNode
        }
        this.end = newNode
        return true
    }

    remove() {
        if (this.begin == null) return false
        let element = this.begin.value
        this.begin = this.begin.next
        if (this.begin == null) this.end == null
        return true
    }

    reset() {
        let end = this.begin
        while (end != null) {
            end = end.next
        }
        this.begin = null
        this.end = null
    }

}

const queue = new DynamicQueue(3)
queue.add(1)
queue.add(2)
queue.reset()
queue.print()