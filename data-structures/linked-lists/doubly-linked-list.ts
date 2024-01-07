class Node {
  value: unknown;
  next: Node | null;
  previous: Node | null;

  constructor(
    value: unknown,
    next: Node | null = null,
    previous: Node | null = null
  ) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: unknown) {
    const newNode = new Node(value);

    if (this.head) {
      newNode.previous = this.tail;
      (this.tail as Node).next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // ...feel free to continue to add your methods like insert at index, etc.
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);

console.log(dll);
