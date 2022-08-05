/**
 * Solution for Missing Number.
 * see: https://leetcode.com/problems/missing-number/
 */
const missingNumber = (nums) => {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + i - nums[i];
  }

  return sum;
};

const missingNumberWithBinarySearch = (nums) => {
  const sorted = nums.sort((a, b) => a - b);
  const n = sorted.length + 1;

  for (let i = 0; i < n; i++) {
    if (!binarySearch(sorted, i)) {
      return i;
    }
  }

  return -1;
};

const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    if (l === r) {
      return target === nums[l] ? true : false;
    }

    const m = Math.floor((l + r) / 2);
    if (nums[m] === target) {
      return true;
    }

    if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return false;
};

// const nums = [3,0,1];
// const nums = [0,1];
// const nums = [9,6,4,2,3,5,7,0,1];
// console.log(missingNumber(nums));

export { missingNumber, missingNumberWithBinarySearch };
