/**
 * Solution for Find Minimum in Rotated Sorted Array.
 * Category: "Array", "Binary Search"
 * see: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
const findMinBinarySearch = (nums) => {
  let result = nums[0];
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    if (nums[l] < nums[r]) {
      result = Math.min(result, nums[l]);
      break;
    }

    const m = Math.floor((l + r) / 2);
    result = Math.min(result, nums[m]);
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return result;
};

const findMinByBruteForce = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1];
    }
  }

  return nums[0];
};

const findMin = (nums) => {
  return Math.min(...nums);
};

// const nums = [11,13,15,17];
// const nums = [3,4,5,6,1,2];
// const nums = [4,5,6,7,0,1,2];
// const nums = [2,4,5,6,7,0,1];
// console.log(findMinBinarySearch(nums));

export { findMin, findMinByBruteForce, findMinBinarySearch };
