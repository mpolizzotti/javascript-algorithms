/**
 * Solution for twoSum Challenge.
 * see: https://leetcode.com/problems/two-sum/
 */
const twoSum = (nums, target) => {
  let isTargetSumFound = false;
  const indices = [];

  for (let i = 0; i < nums.length; i++) {
    if (!isTargetSumFound) {
      const parentTemp = nums[i];

      for (let y = i + 1; y < nums.length; y++) {
        const childTemp = nums[y];

        if ((parentTemp + childTemp) === target) {
          indices.push(i);
          indices.push(y);
          isTargetSumFound = true;
        }
      }
    }
  }

  return indices;
};

// Time Complexity: O(n^2) or Quadratic time.

const twoSumWithMap = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetMinusValue = target - nums[i];
    if (map.has(targetMinusValue)) {
      return [map.get(targetMinusValue), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [];
}

// Time Complexity: O(n) or Linear time.

// Explanation:
// const nums = [11, 15, 2, 7];
// const target = 9;

// 2 + 7 = 9
// 9 - 2 = 7
// 2 is the only number added to 7 to equal the target of 9.
// We don't need check every number, we just need to know if 7 exists.

export { twoSum, twoSumWithMap };
