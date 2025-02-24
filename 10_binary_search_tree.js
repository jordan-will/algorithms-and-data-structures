class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return data;
        }
    }

    inorder(node) {
        if (node === null) {
            return 'null';
        }
        let result = node.data.toString();
        if (node.left !== null || node.right !== null) {
            result += '(';
            result += this.inorder(node.left);
            result += ', ';
            result += this.inorder(node.right);
            result += ')';
        }
        return result;
    }


    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            // Nó com apenas um filho ou sem filhos
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            /*
                Node with two children: get successor in order (smallest in right subtree)
            */
            const aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }


    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    print(node) {
        const result = this.inorder(node);
        console.log(result);
    }

}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(20);
bst.insert(10);
// bst.remove(10)
bst.insert(5);
bst.insert(25);
bst.print(bst.root);
