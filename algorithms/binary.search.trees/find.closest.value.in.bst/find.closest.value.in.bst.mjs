const findClosestValueInBstWithRecursion = (tree, target) => {``
  const findClosestValueInBstWithRecursionHelper = (tree, target, closest) => {
    // When we are at the bottom of our tree.
    if (!tree) {
      return closest;
    }
  
    if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
      closest = tree.value;
    }
  
    if (tree.value < target) {
      // We want to traverse the right side of tree.
      // If our current node is less then the target we know that
      // all numbers in the left side of the tree are also less
      // then the target.
      return findClosestValueInBstHelper(tree.right, target, closest);
    } else if (tree.value > target) {
      // We want to traverse the left side of tree.
      // If our current node is greater then the target we know that
      // all numbers on the right side of the tree are also greater
      // then the target.
      return findClosestValueInBstHelper(tree.left, target, closest);
    } else {
      // The current node must be equal to the target.
      return closest;
    }
  };

  return findClosestValueInBstWithRecursionHelper(tree, target, Infinity);
};

const findClosestValueInBst = (tree, target) => {
  let current = tree;
  let closest = Infinity;

  while (current) {
    if (Math.abs(closest - target) > Math.abs(current.value - target)) {
      closest = current.value;
    }

    if (current.value < target) {
      // We want to traverse the right side of tree.
      // If our current node is less then the target we know that
      // all numbers in the left side of the tree are also less
      // then the target.
      current = current.right;
    } else if (current.value > target) {
      // We want to traverse the left side of tree.
      // If our current node is greater then the target we know that
      // all numbers on the right side of the tree are also greater
      // then the target.
      current = current.left;
    } else {
      // The current node must be equal to the target.
      closest = current.value;
      break;
    }
  }

  return closest;
};

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

// const target = 12;
// console.log(findClosestValueInBst(root, target));

export {
  findClosestValueInBstWithRecursion,
  findClosestValueInBstWithRecursionHelper,
  findClosestValueInBst };
