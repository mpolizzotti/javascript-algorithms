const findElementIndex = (arr, element) => {
  let result = -1;
  arr.forEach((item, index) => {
    if (item === element) {
      result = index;
      return result;
    }
  });
  return result;
};

const findElementInObject = (arr, comparatorFn) => {
  let result = -1;
  arr.forEach((element, index) => {
    if (typeof element === 'object' && element !== null && comparatorFn(element)) {
      result = index;
      return result;
    }
  });
  return result;
};

// Time Complexity: O(n)

// Space Complexity: O(1) Constant Space Complexity
// Reason: No new "permanent" values are created during the iteration.

export { findElementIndex, findElementInObject }