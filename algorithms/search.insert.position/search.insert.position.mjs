/**
 * Solution for Search Insert Position.
 * see: https://leetcode.com/problems/search-insert-position/
 */
const searchInsert = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (l === r) {
      return target <= nums[l] ? l : l + 1;
    }

    const m = Math.floor((l + r)/2);
    if (nums[m] === target) {
      return m;
    }

    if (nums[m] > target) {
      r = m;
    } else if (nums[m] < target) {
      l = m + 1;
    }
  }

  return -1;
};

// const nums = [1,3];
// const target = 0;
// console.log(searchInsert(nums, target));

export default searchInsert;
