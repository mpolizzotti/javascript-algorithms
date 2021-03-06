const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    return (arr[0] > arr[1]) ? [arr[1], arr[0]] : arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  const leftSortedArr = mergeSort(leftArr);
  const rightSortedArr = mergeSort(rightArr);

  let leftArrIndex = 0;
  let rightArrIndex = 0;
  const mergedArr = [];

  while (
    leftArrIndex < leftSortedArr.length ||
    rightArrIndex < rightSortedArr.length
  ) {

    if (leftArrIndex >= leftSortedArr.length) {
      mergedArr.push(rightSortedArr[rightArrIndex]);
      rightArrIndex++;
    } else if (rightArrIndex >= rightSortedArr.length) {
      mergedArr.push(leftSortedArr[leftArrIndex]);
      leftArrIndex++;
    } else if (leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]) {
      mergedArr.push(rightSortedArr[rightArrIndex]);
      rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArr[leftArrIndex]);
      leftArrIndex++;
    }
  }

  return mergedArr;
};

// Space Complexity: O(n) Linear Space Complexity
// The number of elements that get added to memory grows
// exponentially.

// Reason: Nested function calls with new values being created.

export default mergeSort;