import BST from '../bst.construction/bst.construction.mjs';

const inOrder = (tree, arr = []) => {
  if (tree) {
    inOrder(tree.left, arr);
    arr.push(tree.value);
    inOrder(tree.right, arr);
  }
  return arr;
};

const preOrder = (tree, arr = []) => {
  if (tree) {
    arr.push(tree.value);
    preOrder(tree.left, arr);
    preOrder(tree.right, arr);
  }
  return arr;
};

const postOrder = (tree, arr = []) => {
  if (tree) {
    postOrder(tree.left, arr);
    postOrder(tree.right, arr);
    arr.push(tree.value);
  }
  return arr;
};

// Construct a Tree.
let tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(22);
tree.insert(1);

// console.log(`inOrder: ${inOrder(tree)}`);
// console.log(`preOrder: ${preOrder(tree)}`);
// console.log(`postOrder: ${postOrder(tree)}`);
