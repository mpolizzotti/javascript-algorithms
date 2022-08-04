/**
 * Solution for N-Repeated Element in Size 2N Array
 * see: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */
const repeatedNTimes = (nums) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 0);
    } else {
      return nums[i];
    }
  }

  return -1;
};

// const nums = [1,2,3,3];
// console.log(repeatedNTimes(nums));

export default repeatedNTimes;
