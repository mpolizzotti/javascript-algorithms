const runningSum = (numbers) => {
  let sum = 0;
  const result = [];
  for (const num of numbers) {
    result.push(sum += num);
  }
  return result;
};

// Time Complexity: O(n) or Linear Time

const runningSumUsingInputArray = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = sum += numbers[i];
  }
  return numbers;
};

// Time Complexity: O(n) or Linear Time

export { runningSum, runningSumUsingInputArray }
