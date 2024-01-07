// LIFO = last in, first out
// ex: stack of plates -> whichever plate you put the last, that is the first plate you'll get
// you can do it just by Array.prototype.push() and Array.prototype.pop() methods :)
// Let's do it with linked list instead ))

class Node {
  value: any;
  next: Node | null;
  constructor(value: any, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  first: Node | null;
  length: number;
  constructor() {
    this.first = null;
    this.length = 0;
  }

  push(value: any): number {
    const newNode = new Node(value);

    if (this.first) {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    } else {
      this.first = newNode;
    }

    return ++this.length;
  }

  pop(): Node | null {
    if (!this.first) return null;

    const temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp;
  }
}

const stack = new Stack();

console.log(stack, '\n')

console.log("Pushed:", 1, 2, 3)
stack.push(1);
stack.push(2);
stack.push(3);

console.log('\n', stack, '\n')

console.log("Popped: ", stack.pop())
console.log("Popped: ", stack.pop())
console.log("Popped: ", stack.pop())
console.log("Popped: ", stack.pop())

console.log(stack);
