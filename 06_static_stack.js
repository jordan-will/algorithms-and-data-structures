/*
 - INITIALIZE THE STACK
 - RETURN THE SIZE OF VALIDS ELEMENTS
 - SHOW ELEMENTS IN THE STACK
 - INSERT ELEMENTS (PUSH)
 - DELETE ELEMENTS (POP)
 - RESTART THE STACK
*/


class StaticStack {
    MAX
    top
    stack

    constructor(max){
        this.MAX = max 
        this.top = -1
        this.stack = new Array(max).fill(null)
    }

    size()
    {
        return this.top + 1
    }

    showStack()
    {
        let print = "Stack: "
        for(let i = this.top; i >= 0; i--)
        {
            print+= `${this.stack[i]} `
        }
        console.log(print)
    }

    push(item)
    {
        if(this.top >= this.MAX - 1) return false
        this.top++
        this.stack[this.top] = item
        return true
    }

    pop()
    {
        if(this.top == -1) return false
        const register = this.stack[this.top]
        this.stack.splice(this.top, 1)
        this.top--
        return register
    }

    reset()
    {
        this.stack = new Array(this.MAX).fill(null)
        this.top = -1
    }

}

const stack = new StaticStack(4)
stack.push(1)
stack.push(2)
stack.pop()
stack.push(4)
stack.push(6)
stack.push(12)
stack.showStack()
console.log('Size of stack ', stack.size())