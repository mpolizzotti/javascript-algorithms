const mergeSort = (arr) => {
  // When array has less then 2 elements,
  // the array cannot be sorted any further.
  if (arr.length < 2) {
    return arr;
  }

  // When array only has 2 elements,
  // place them in ascending order.
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  // Find the middle of the array.
  const middle = Math.floor(arr.length / 2);
  // Split array into left and right arrays.
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  // Continue to split arrays.
  const leftSortedArray = mergeSort(leftArr);
  const rightSortedArray = mergeSort(rightArr);

  // Once all arrays are down to 2 array elements,
  // we need to merge them back together.
  let leftArrIndex = 0;
  let rightArrIndex = 0;
  const mergedArr = [];
  while (
    leftArrIndex < leftSortedArray.length ||
    rightArrIndex < rightSortedArray.length) {
      if (leftArrIndex >= leftSortedArray.length ||
        leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]) {
        mergedArr.push(rightSortedArray[rightArrIndex]);
        rightArrIndex++;
      } else {
        mergedArr.push(leftSortedArray[leftArrIndex]);
        leftArrIndex++;
      }
  }

  return mergedArr;
};

export default mergeSort;