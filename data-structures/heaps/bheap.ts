// Binary heaps
// In MaxBinaryHeap, parent Node's value is always larger than childrens'
// In MinBinaryHeap, parent Node's value is always smaller than childrens'
// refer: https://www.geeksforgeeks.org/heap-data-structure/

class BinaryHeap {
  heap: any[];

  constructor() {
    this.heap = [];
  }

  insert(value: any) {
    let position = this.heap.push(value) - 1;
    let parent = Math.floor((position - 1) / 2);

    while (value > this.heap[parent]) {
      this.swap(parent, position);

      position = parent;
      parent = Math.floor((position - 1) / 2);
    }
    return this.heap;
  }

  extractMax() {
    if (!this.heap.length) return;

    this.swap(0, this.heap.length - 1);
    const oldNode = this.heap.pop();

    //trikle down
    let parent = 0,
      childLeft = 1,
      childRight = 2;
    //Math.max returns NaN is one of the arguments is undefined
    let max = Math.max(
      this.heap[childLeft],
      this.heap[childRight] || -Infinity
    );

    while (this.heap[parent] < max) {
      let child = this.heap[childLeft] === max ? childLeft : childRight;
      this.swap(parent, child);
      parent = child;

      childLeft = parent * 2 + 1;
      childRight = parent * 2 + 2;
      max = Math.max(this.heap[childLeft], this.heap[childRight] || -Infinity);
    }
    return oldNode;
  }

  private swap(inx1: number, inx2: number) {
    [this.heap[inx1], this.heap[inx2]] = [this.heap[inx2], this.heap[inx1]];
  }
}
const heap = new BinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(44);
heap.insert(40);
heap.insert(9);
heap.insert(10);
heap.insert(45);

console.log("Heap:", heap)
console.log("\nMax:", heap.extractMax())
