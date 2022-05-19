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
    if (
      leftArrIndex >= leftSortedArr.length ||
      leftSortedArr[leftArrIndex] > rightSortedArr[rightArrIndex]) {
        mergedArr.push(rightSortedArr[rightArrIndex]);
        rightArrIndex++;
    } else {
      mergedArr.push(leftSortedArr[leftArrIndex]);
      leftArrIndex++;
    }
  }

  return mergedArr;
};

export default mergeSort;