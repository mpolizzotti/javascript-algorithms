/**
 * Solution for Search in Rotated Sorted Array.
 * Category: "Array", "Binary Search"
 * see: https://leetcode.com/problems/search-in-rotated-sorted-array/
 */
const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    }

    // left sorted portion.
    if (nums[l] <= nums[m]) {
      if (target > nums[m] || target < nums[l]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    // right sorted portion.
    } else {
      if (target < nums[m] || target > nums[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
};

const searchBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }

  return -1;
};

// const nums = [4,5,6,7,0,1,2];
// const nums = [1];
// const nums = [5,1,3];
// const target = 5;
// console.log(search(nums, target));
export { search, searchBruteForce };
