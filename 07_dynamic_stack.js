/*
 - INITIALIZE THE STACK
 - RETURN THE SIZE OF VALIDS ELEMENTS
 - SHOW ELEMENTS IN THE STACK
 - CHECK IF THE STACK IS EMPTY
 - INSERT ELEMENTS (PUSH)
 - DELETE ELEMENTS (POP)
 - RESTART THE STACK
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DynamicStack {

    constructor() {
        this.top = null;
    }

    initialize() {
        this.top = null;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.isEmpty()) return false
        const element = this.top.value;
        this.top = this.top.next;
        return element;
    }

    size() {
        let count = 0;
        let current = this.top;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    showStack() {
        let current = this.top;
        let print = "Stack: ";
        while (current !== null) {
            print += `${current.value} `;
            current = current.next;
        }
        console.log(print);
    }

    isEmpty() {
        return this.top === null;
    }


    restart() {
        this.initialize();
    }
}

const stack = new DynamicStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.showStack(); 
stack.pop();
stack.showStack(); 
console.log("Size: " + stack.size()); // Saída: Size: 2
