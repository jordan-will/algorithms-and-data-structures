# Data Structures in JavaScript

This repository contains various data structures implemented in JavaScript. Memory allocation, when necessary, uses `null` values for representation. Below is a brief description of each algorithm and its purpose. More algorithms are being implemented.

## 01_list_linear_sequential.js
**Linear Sequential List**
- **Description:** A linear sequential list is a collection of elements stored contiguously in memory. It provides direct access to elements using their index.
- **Purpose:** Useful for scenarios where elements need to be accessed quickly by their position.

## 02_ordered_sequential_list.js
**Ordered Sequential List**
- **Description:** An ordered sequential list maintains elements in a specific order. New elements are inserted in a way that preserves this order.
- **Purpose:** Useful for maintaining sorted data and quickly finding or inserting elements while preserving order.

## 03_static_linked_list.js
**Static Linked List**
- **Description:** A static linked list uses a fixed array to store elements and pointers (indices) to indicate the next position. This is useful when memory is limited and cannot be dynamically allocated.
- **Purpose:** Useful for applications with constrained memory where dynamic allocation is not feasible.

## 04_dynamic_likend_list.js
**Dynamic Linked List**
- **Description:** A dynamic linked list allocates memory for elements as needed, allowing the list to grow and shrink dynamically.
- **Purpose:** Useful for scenarios where the number of elements is not known in advance and can vary over time.

## 05_circular_dynamic_linked_list.js
**Circular Dynamic Linked List**
- **Description:** A circular linked list is a linked list where the last element points to the first, creating a circular structure.
- **Purpose:** Useful for applications requiring cyclic iteration over elements, such as round-robin scheduling.

## 06_static_stack.js
**Static Stack**
- **Description:** A static stack is a stack with a fixed size, implemented using an array. It supports operations like push, pop, and peek.
- **Purpose:** Useful for scenarios with known and fixed capacity, providing Last-In-First-Out (LIFO) access.

## 07_dynamic_stack.js
**Dynamic Stack**
- **Description:** A dynamic stack is a stack that can grow and shrink dynamically, implemented using a linked list.
- **Purpose:** Useful for scenarios where the capacity may change over time, providing flexible LIFO access.

## 08_static_queue.js
**Static Queue**
- **Description:** A static queue is a queue with a fixed size, implemented using an array. It supports operations like enqueue, dequeue, and peek.
- **Purpose:** Useful for scenarios with known and fixed capacity, providing First-In-First-Out (FIFO) access.

## 09_dynamic_queue.js
**Dynamic Queue**
- **Description:** A dynamic queue is a queue that can grow and shrink dynamically, implemented using a linked list.
- **Purpose:** Useful for scenarios where the capacity may change over time, providing flexible FIFO access.

## 10_binary_search_tree.js
**Binary Search Tree (BST)**
- **Description:** A binary search tree is a data structure in which each node has at most two children, referred to as the left child and the right child. Each node stores a value, and for any given node, all values in the left subtree are less than the node’s value, and all values in the right subtree are greater than the node’s value.
- **Purpose:** Useful for scenarios requiring efficient searching, insertion, and deletion of elements. Provides average-case time complexities of O(log n) for these operations, making it ideal for dynamic sets of data where elements are constantly added or removed.

## 11_n_tree.js
**N-ary Tree**
- **Description:** An N-ary tree is a tree data structure where each node can have at most N children. Unlike binary trees, where each node has up to two children, N-ary trees allow for a more flexible hierarchical representation.
- **Purpose:** Useful for representing hierarchical structures such as file systems, XML/HTML document trees, and game decision trees.

## 12_trie.js
**Trie (Prefix Tree)**
- **Description:** A trie is a tree data structure used to store a dynamic set of strings. Each node represents a character in a string, and words can be retrieved efficiently by traversing the structure.
- **Purpose:** Useful for scenarios involving fast word lookup, autocomplete systems, dictionary implementations, and IP routing.

### Memory Allocation
In these implementations, memory allocation uses `null` values to represent uninitialized or empty slots, ensuring clear and consistent management of the data structures.

### Getting Started
To use these data structures, clone the repository and explore each file. Each file contains implementation details and usage examples.

```bash
git clone https://github.com/jordanwmp/algorithm-and-data-structure.git
cd algorithm-and-data-structure
```

### More About Me
Check out my website to know more about me: [https://jordanwmp.github.io](https://jordanwmp.github.io)

