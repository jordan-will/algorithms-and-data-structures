class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    
    add(element) {
        const newNode = new Node(element);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; // Point to itself to form the circle
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Keep the circle pointing to the head
        }

        this.size++;
    }

    
    search(element) {
        if (this.head === null) return null;

        let current = this.head;
        do {
            if (current.element === element) {
                return current; // Element found
            }
            current = current.next;
        } while (current !== this.head);

        return null; // Element not found
    }

   
    remove(element) {
        if (this.head === null) return false;

        let current = this.head;
        let previous = null;

        do {
            if (current.element === element) {
                if (previous === null) { // The node to be removed is the first one
                    if (this.head === this.tail) { // Only one element in the list
                        this.head = null;
                        this.tail = null;
                    } else {
                        this.head = this.head.next; this.tail.next = this.head;
                    }
                } else {
                    previous.next = current.next;
                    if (current === this.tail) {
                        this.tail = previous;
                    }
                }
                this.size--;
                return true;
            }
            previous = current;
            current = current.next;
        } while (current !== this.head);

        return false; // Element not found
    }

    printList() {
        if (this.head === null) {
            console.log("The list is empty");
            return;
        }

        let current = this.head;
        let listString = "";

        do {
            listString += current.element + " -> ";
            current = current.next;
        } while (current !== this.head);

        listString += "(head)";
        console.log(listString);
    }

    // Function to get the size of the list
    getSize() {
        return this.size;
    }
}

// Usage example
const list = new CircularLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.printList();