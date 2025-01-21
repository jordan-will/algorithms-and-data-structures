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

### Memory Allocation
In these implementations, memory allocation uses `null` values to represent uninitialized or empty slots, ensuring clear and consistent management of the data structures.

### Getting Started
To use these data structures, clone the repository and explore each file. Each file contains implementation details and usage examples.

```bash
git clone https://github.com/jordanwmp/algorithm-and-data-structure.git
cd algorithm-and-data-structure
