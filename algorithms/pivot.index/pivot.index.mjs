const runningSum = (numbers) => {
  let sum = 0;
  numbers.forEach((element) => sum += element);
  return sum;
};

const pivotIndex = (numbers) => {
  let pivotIdx = 0;

  for (let i = 0; i <= numbers.length - 1; i++) {
    pivotIdx = i;

    const leftSlice = numbers.slice(0, pivotIdx);
    const rightSlice = numbers.slice(pivotIdx + 1, numbers.length);

    const addLeftSide = (pivotIdx === 0) ? 0 : runningSum(leftSlice);
    const addRightSide = (pivotIdx === numbers.length - 1) ? 0 : runningSum(rightSlice);

    const leftSum = addLeftSide;
    const rightSum = addRightSide;

    if (leftSum === rightSum) {
      return pivotIdx;
    }
  }

  return -1;
};

const pivotIndexOptimized = (numbers) => {
  let sum = 0;
  let leftSum = 0;
  numbers.forEach((number) => sum += number );
  for (let i = 0; i < numbers.length; i++) {
    if (leftSum === (sum - leftSum - numbers[i])) {
      return i;
    }
    leftSum += numbers[i];
  }

  return -1;
};

export { pivotIndex, pivotIndexOptimized };
