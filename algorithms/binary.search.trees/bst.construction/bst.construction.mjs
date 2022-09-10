class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;

    while (currentNode) {
      if (value >= currentNode.value) { // Traverse right side.
        if (!currentNode.right) {
          currentNode.right = new BST(value);
          currentNode = currentNode.right;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (value < currentNode.value) { // Traverse left side.
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

  contains(value) {
    let currentNode = this;

    while (currentNode) {
      if (value > currentNode.value) { // Right side.
        currentNode = currentNode.right;
      } else if (value < currentNode.value) { // Left side.
        currentNode = currentNode.left;
      } else {
        return true;
        break;
      }
    }

    return false;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  remove(value, parentNode = null) {
    let currentNode = this;

    while (currentNode) {
      if (value > currentNode.value) { // right side.
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value < currentNode.value) { // left side.
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else { // match was found.
        if (currentNode.left && currentNode.right) { // Node has both child nodes.
          currentNode.value = currentNode.right.getMinValue();
          currentNode.right.remove(currentNode.value, currentNode);
        } else if (!parentNode) { // Parent node does not exist.
          if (currentNode.left) { // Left side of tree.
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          } else if (currentNode.right) { // Right side of tree.
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          } else { // Parent node does not exist. Child nodes do not exist.
            currentNode.value = value;
          }
        } else if (parentNode.left && parentNode.left.value === currentNode.value) { // Node has left child node.
          parentNode.left = (currentNode.left) ? currentNode.left : currentNode.right;
        } else if (parentNode.right && parentNode.right.value === currentNode.value) { // Node has right child node.
          parentNode.right = (currentNode.left) ? currentNode.left : currentNode.right;
        }

        break;
      }
    }

    return this;
  }
}

// Construct a Tree.
// let tree = new BST(10);

// Use Case:
// Remove node 15. Node has two child nodes.
// tree.insert(5);
// tree.insert(2);
// tree.insert(5);
// tree.insert(15);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(22);
// tree.insert(1);

// Use Case:
// Remove 10. No Parent Node. Left side of tree.
// tree.insert(5);
// tree.insert(5);
// tree.insert(2);
// tree.insert(1);

// Use Case:
// Remove 10. No Parent Node. Right side of tree.
// tree.insert(15);
// tree.insert(13);
// tree.insert(22);

// Use Case:
// Remove 10. No Parent Node. No child nodes.

// Use Case:
// Remove 5. Node has left child node.
// tree.insert(5);
// tree.insert(2);
// tree.insert(1);

export default BST;
