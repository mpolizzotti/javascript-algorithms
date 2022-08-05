/**
 * Solution for Binary Search
 * see: https://leetcode.com/problems/binary-search/
 */
const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
};

// const nums = [-1,0,3,5,9,12];
// const target = 9;
// const nums = [-1,0,3,5,9,12];
// const target = 2;
// console.log(search(nums, target));

export default search;
