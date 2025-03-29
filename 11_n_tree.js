class NaryTreeNode {
  constructor(value) {
      this.value = value;  
      this.children = [];  
  }
}

class NaryTree {
  constructor() {
      this.root = null; 
  }

  initialize(value) {
      this.root = new NaryTreeNode(value);
  }

  insert(parentValue, value) {
      const parentNode = this.search(parentValue);
      if (parentNode) {
          parentNode.children.push(new NaryTreeNode(value));
      } else {
          console.log(`Father ${parentValue} not found`);
      }
  }

  print(node = this.root) {
      if (!node) return "";
      let result = `${node.value}`;
      if (node.children.length > 0) {
          const childrenStrings = node.children.map(child => this.print(child));
          result += `(${childrenStrings.join(",")})`;
      }
      return result;
  }

  // recursive serach
  search(value, node = this.root) {
      if (!node) return null;
      if (node.value === value) return node;
      for (const child of node.children) {
          const found = this.search(value, child);
          if (found) return found;
      }
      return null;
  }

  delete(value, node = this.root) {
      if (!node) return false;
      for (let i = 0; i < node.children.length; i++) {
          if (node.children[i].value === value) {
              node.children.splice(i, 1);
              return true;
          } else {
              if (this.delete(value, node.children[i])) {
                  return true;
              }
          }
      }
      return false;
  }
}

const tree = new NaryTree();
tree.initialize("A");
tree.insert("A", "B");
tree.insert("A", "C");
tree.insert("B", "D");
tree.insert("B", "E");
tree.insert("C", "F");

console.log("Tree:");
console.log(tree.print()); 

console.log("Searching 'B':", tree.search("B"));
console.log("Deleting 'D':", tree.delete("D"));
console.log("New three:");
console.log(tree.print()); 