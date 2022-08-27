import {
  findClosestValueInBstWithRecursion,
  findClosestValueInBst } from './find.closest.value.in.bst.mjs';

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

describe('findClosestValueInBstWithRecursion()', () => {
  it('should return index 13 for target 12', () => {
    expect(findClosestValueInBstWithRecursion(root, 12)).toEqual(13);
  });
});

describe('findClosestValueInBst()', () => {
  it('should return index 13 for target 12', () => {
    expect(findClosestValueInBst(root, 12)).toEqual(13);
  });
});
