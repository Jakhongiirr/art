// Like stack, but FIFO - first in first out
// ex: imagine you're printing something using printer, tasks are queued.
// You can do using Array.prototype.push() and Array.prototype.shift() methods
// but let's use linked list

class Node {
  value: any;
  next: Node | null;
  constructor(value: any, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  size: number;
  first: Node | null;
  last: Node | null;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value: any) {
    const newNode = new Node(value);
    if (this.first && this.last) {
      this.last.next = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (!this.first.next) {
      const temp = this.first;
      this.first = null;
      this.last = null;
      return temp;
    }

    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const queue = new Queue();

console.log(queue);
console.log("Enqueued:", 1, 2, 3);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
console.log("Dequed:", queue.dequeue());
console.log("Dequed:", queue.dequeue());
console.log("Queue now:");
console.log(queue);
