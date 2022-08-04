/**
 * Solution for Maximum Subarray.
 * Category: "Array"
 * see: https://leetcode.com/problems/maximum-subarray/
 */
const maximumSubarray = (nums) => {
  let max = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    max = Math.max(max, currentSum);
  }

  return max;
};

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maximumSubarray(nums));

export default maximumSubarray;
