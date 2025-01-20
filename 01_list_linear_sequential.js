/*
    ########### LINEAR LIST SEQUENTIAL ###########

    - INITIALIZE THE LIST
    - RETURN THE SIZE OF VALID ELEMENTS
    - SHOW LIST'S ELEMENTS
    - SEARCH FOR ELEMENTS
    - REMOVE ELEMENTS
    - RESTART THE LIST
*/

const sequentialSearch = (list, value) => {
    let i = 0
    while (i < list.length) {
        if (value == list[i]) return i
        i += 1
    }
    return -1
}

class SequentialList {

    MAX
    size
    sequentialList

    constructor(max) {
        this.MAX = max
        this.sequentialList = new Array(this.MAX).fill(null)
        this.size = 0 
    }

    add(element, index) {
        if (this.size > this.MAX || index < 0 || index >= this.max) {
            return false
        }

        for (let j = this.size; j > index; j--) {
            this.sequentialList[j] = this.sequentialList[j - 1]
        }

        this.sequentialList[index] = element
        this.size++
        return true
    }

    remove(element) {
        let index = sequentialSearch(this.sequentialList, element)
        if (index == -1) return false
        for (let j = index; j < this.size - 1; j++) {
            this.sequentialList[j] = this.sequentialList[j + 1]
        }
        this.sequentialList[this.size - 1] = null;
        this.size--
        return true
    }

    restartList() {
        this.sequentialList = new Array(this.MAX).fill(null)
        this.size = 0 
    }

    showList() {
        this.sequentialList.filter(e => e != null).forEach(element => console.log(element))
    }

    length() {
        return this.sequentialList.filter(e => e != null).length
    }

}

const list = new SequentialList(5)
list.add(1, 0)
list.add(2, 1)
list.add(3, 2)
list.add(4, 3)

list.showList()
console.log(list)