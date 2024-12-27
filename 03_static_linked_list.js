const print = (arg) => console.log(arg)

class StaticLinkedList {

    INVALID = -1
    MAX
    list
    start//to indicate there are any available item
    disposition//first available item

    constructor(max) {
        this.MAX = max
        this.setInitialList()
    }

    setInitialList() {
        this.list = new Array(this.MAX)
            .fill(null)
            .map(() => ({ element: null, next: null }))
    }

    initializeList() {
        for (let i = 0; i < this.MAX - 1; i++) {
            this.list[i].next = (i + 1)
        }

        this.list[this.MAX - 1].next = this.INVALID
        this.start = this.INVALID
        this.disposition = 0
    }

    length() {
        let i = this.start
        let length = 0
        while (i != this.INVALID) {
            length++
            i = this.list[i].next
        }
        return length
    }

    showList() {
        let i = this.start
        print("List: ")
        while (i != this.INVALID) {
            print(this.list[i].element)
            i = this.list[i].next
        }
    }

    orderedSequentialSearch(item) {
        let i = this.start
        while (i != this.INVALID && this.list[i].element < item) {
            i = this.list[i].next
        }
        if (i != this.INVALID && this.list[i].element == item) return i
        return this.INVALID
    }

    /*GET THE FIRST VALID ELEMENT IN THE LIST*/
    getNo() {
        let result = this.disposition
        if (this.disposition != this.INVALID) {
            this.disposition = this.list[this.disposition].next
        }
        return result
    }

    addElementOrdered(item) {
        if (this.disposition == this.INVALID) return false
        let before = this.INVALID
        let i = this.start

        while (i != this.INVALID && this.list[i].element < item.element) {
            before = i
            i = this.list[i].next
        }

        if (i != this.INVALID && this.list[i].element == item.element) return false

        i = this.getNo()
        this.list[i] = item

        if (before == this.INVALID)//the element will be the firs
        {
            this.list[i].next = this.start
            this.start = i
        } else {//the list already has elements
            this.list[i].next = this.list[before].next
            this.list[before].next = i
        }

        return true
    }

    returnNo(j) {
        this.list[j].next = this.disposition
        this.disposition = j
    }

    removeElement(item) {
        let before = this.INVALID
        let i = this.start

        while (i != this.INVALID && this.list[i].element < item.element) {
            before = i
            i = this.list[i].next
        }

        if (i == this.INVALID || this.list[i].element != item.element) return false

        if (before == this.INVALID) {
            this.start = this.list[i].next
        } else {
            this.list[before].next = this.list[i].next
        }

        this.returnNo(i)
        return true
    }

    restartList() {
        this.setInitialList()
        this.initializeList()
    }
}

const list = new StaticLinkedList(5)

list.initializeList()

list.addElementOrdered({ element: 12, next: null })
list.addElementOrdered({ element: 10, next: null })
list.addElementOrdered({ element: 4, next: null })
list.addElementOrdered({ element: 5, next: null })
list.addElementOrdered({ element: 3, next: null })

list.removeElement({ element: 3, next: null })
list.removeElement({ element: 10, next: null })

//list.restartList()

print(list)
print(list.length())
list.showList()
print(list.list)
