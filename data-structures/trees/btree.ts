// Binary search tree.
// Binary search tree constraints:
// Every node can have maximum 2 children, 1 child is ok but 3 children is not okay
// Value of a node which is on the left hand side should be smaller to the parent's value
// Value of a node which is on the right hand side should be bigger than the parent's value
// if parent's value and new node's value are the same, you decide weather you insert them to right or to left, or don't allow duplicates

class Node {
  value: any;
  left: Node | null;
  right: Node | null;
  constructor(value: any, left: Node | null = null, right: Node | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: any) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    return this.internalInsert(this.root, newNode);
  }

  find(value: any) {
    if (!this.root) return null;
    return this.internalFind(this.root, value);
  }

  // private methods (to effectively use recursion)

  private internalInsert(parent: Node, newNode: Node): BinarySearchTree {
    if (newNode.value <= parent.value) {
      if (!parent.left) {
        parent.left = newNode;
        return this;
      } else return this.internalInsert(parent.left, newNode);
    } else {
      if (!parent.right) {
        parent.right = newNode;
        return this;
      }
      return this.internalInsert(parent.right, newNode);
    }
  }

  private internalFind(current: Node, value: any): Node | null {
    if (current.value === value) return current;

    if (value > current.value) {
      if (!current.right) return null;
      return this.internalFind(current.right, value);
    }

    if (!current.left) return null;
    return this.internalFind(current.left, value);
  }
}

const bst = new BinarySearchTree();
console.log("Visual:");
console.log(`
           10
     8          11
  7    9     11    12
`);

bst.insert(10);
bst.insert(8);
bst.insert(11);
bst.insert(7);
bst.insert(9);
bst.insert(11);
bst.insert(10);
bst.insert(12);

console.log("\nIn code:\n");

console.log(bst);
console.log("\nroot.left:", bst.root?.left);
console.log("\nroot.right:", bst.root?.right);

console.log("\nbst.find(8) result:\n\n", bst.find(8))
