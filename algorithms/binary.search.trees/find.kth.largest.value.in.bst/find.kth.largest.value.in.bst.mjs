import BST from '../bst.construction/bst.construction.mjs';

// Time: O(n)
// Space: O(n)
const findKthLargestValueInBstBrute = (tree, k) => {
  const inOrderArr = inOrderTraversal(tree, k, []);
  return inOrderArr[(inOrderArr.length) - k];
};

const inOrderTraversal = (tree, k, arr = []) => {
  if (tree) {
    inOrderTraversal(tree.left, k, arr);
    arr.push(tree.value);
    inOrderTraversal(tree.right, k, arr);
  }

  return arr;
};


class TreeInfo {
  constructor(numOfNodesVisited, lastNodeValue) {
    this.numOfNodesVisited = numOfNodesVisited;
    this.lastNodeValue = lastNodeValue;
  }
}

const findKthLargestValueInBst = (tree, k) => {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraversal(tree, treeInfo, k);
  return treeInfo.lastNodeValue;
};

const reverseInOrderTraversal = (tree, treeInfo, k) => {
  if (!tree || treeInfo.numOfNodesVisited === k ) {
    return;
  }

  reverseInOrderTraversal(tree.right, treeInfo, k);
  if (treeInfo.numOfNodesVisited < k) {
    treeInfo.numOfNodesVisited += 1;
    treeInfo.lastNodeValue = tree.value;
    reverseInOrderTraversal(tree.left, treeInfo, k);
  }
}

// Construct a Tree.
let tree = new BST(10);
tree.insert(15);
tree.insert(5);
tree.insert(20);
tree.insert(2);
tree.insert(5);
tree.insert(17);
tree.insert(22);
tree.insert(1);
tree.insert(3);

// console.log(findKthLargestValueInBst(tree, 3));

export { findKthLargestValueInBst, findKthLargestValueInBstBrute };
