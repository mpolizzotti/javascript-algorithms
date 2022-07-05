const quickSort = (arr) => {
  const copied = [...arr];

  // Define base case.
  // When passed an element with a single item.
  if (copied.length <= 1) {
    return copied;
  }

  // Shift array elements to the left.
  // Returns the first element.
  const pivotElement = copied.shift();
  const smallerElementsArr = [];
  const biggerElementsArr = [];
  const centerElementsArr = [pivotElement];

  while (copied.length) {
    const currentElement = copied.shift();
    if (currentElement === pivotElement) {
      centerElementsArr.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArr.push(currentElement);
    } else {
      biggerElementsArr.push(currentElement);
    }
  }

  const smallerElementsSortedArr = quickSort(smallerElementsArr);
  const biggerElementsSortedArr = quickSort(biggerElementsArr);

  return smallerElementsSortedArr.concat(
    centerElementsArr,
    biggerElementsSortedArr,
  );
};

// Space Complexity: O(n) Linear Space Complexity
// The number of elements that get added to memory grows
// exponentially.

// Reason: Nested function calls with new values being created.

export default quickSort;