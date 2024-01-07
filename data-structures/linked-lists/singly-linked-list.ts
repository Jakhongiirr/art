class Node {
  value: unknown;
  next: Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // if no head, assign head to new Node,
  // otherwise put the new Node to the "next" of the last Node
  push(value: unknown): void {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }

    this.length++;
  }

  pop(): Node {
    if (!this.head)
      throw new Error("Can't pop from linked list as head is not initialized");

    if (!this.head.next) {
      const h = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return h;
    }

    let current = this.head;

    while (current.next?.next) {
      current = current.next;
    }
    const res = current.next;
    current.next = null;
    this.tail = current;

    this.length--;
    return res as Node;
  }

  reverse() {
    var node = this.head as any;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node?.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  // feel free to write your own methods...
}

const ll = new SinglyLinkedList();
ll.push(1);
ll.push(2);
ll.push(3);
console.log("Reversed linked list:\n");
console.log(ll.reverse());
