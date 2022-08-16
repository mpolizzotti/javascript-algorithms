/**
 * Solution for Squares of a Sorted Array
 * see: https://leetcode.com/problems/squares-of-a-sorted-array/
 */
const sortedSquares = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const square = nums[i] * nums[i];
    nums[i] = square;
  }

  return nums.sort((a, b) => a - b);
};

const sortedSquaresWithPointers = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  const result = [];

  while (l <= r) {
    if (nums[l] ** 2 > nums[r] ** 2) {
      result.push(nums[l] ** 2);
      l++;
    } else {
      result.push(nums[r] ** 2);
      r--;
    }
  }

  return result.reverse();
};

// const nums = [-4,-1,0,3,10];
// console.log(sortedSquaresWithPointers(nums));

export { sortedSquares, sortedSquaresWithPointers };
