import BST from '../bst.construction/bst.construction.mjs';

const validateBst = (tree) => {
  return validateBstHelper(tree, -Infinity, Infinity);
};

const validateBstHelper = (tree, minValue, maxValue) => {
  if (!tree) { // Bottom of the tree.
    return true;
  }

  // Validation.
  // Rule: MixValue <= Node.Value < MaxValue
  // Node value cannot be less then minimum value.
  // Node value cannot exceed or equal maximum value.
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }

  // Tree is valid at this point.
  // Validate left sub-tree.
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  // Validate right sub-tree.
  const rightIsValid = validateBstHelper(tree.right, tree.value, maxValue);

  return leftIsValid && rightIsValid;
};

// Time Complexity: O(n) or Linear Time.
// Need to traverse every node in tree.

// Space Complexity: O(d) where d is the tree depth.

// Construct a Tree.
let tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(1);
tree.insert(14);

console.log(validateBst(tree));

export default validateBst;
