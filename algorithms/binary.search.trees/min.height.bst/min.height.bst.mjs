class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    while (currentNode) {
      if (value >= currentNode.value ) { // right side.
        if (!currentNode.right) {
          currentNode.right = new BST(value);
          currentNode = currentNode.right;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) { // left side.
        if (!currentNode.left) {
          currentNode.left = new BST(value);
          currentNode = currentNode.left;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }
}

const minHeightBst = (arr) => {
  return minHeightBstHelper(arr, null, 0, arr.length - 1);
};

const minHeightBstHelper = (arr, tree = null, startIdx, endIdx) => {
  if (endIdx < startIdx) {
    return tree;
  }

  const m = Math.floor((startIdx + endIdx) / 2);

  if (!tree) {
    tree = new BST(arr[m]);
  } else {
    tree.insert(arr[m]);
  }

  minHeightBstHelper(arr, tree, startIdx, m - 1); // left sub-tree.
  minHeightBstHelper(arr, tree, m + 1, endIdx); // right sub-tree.

  return tree;
};

// const minHeightBstHelper = (arr, tree = null) => {
//   if (!arr.length) {
//     return tree;
//   }

//   const m = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, m);
//   let rightArr = arr.slice(m + 1, arr.length);

//   if (!tree) {
//     tree = new BST(arr[m]);
//   } else {
//     tree.insert(arr[m]);
//   }

//   minHeightBstHelper(leftArr, tree);
//   minHeightBstHelper(rightArr, tree);

//   return tree;
// };

// Construct a Tree.
// let tree = new BST(10);
// tree.insert(2);
// tree.insert(5);
// tree.insert(14);
// tree.insert(1);
// tree.insert(5);
// tree.insert(13);
// tree.insert(15);
// tree.insert(7);
// tree.insert(22);

// const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22];
// console.log(minHeightBst(arr));

export default minHeightBst;
