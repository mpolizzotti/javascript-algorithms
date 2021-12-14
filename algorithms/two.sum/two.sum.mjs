/**
 * Solution for twoSum Challenge.
 * see: https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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

const twoSumWithMap = (nums, target) => {
  let map = new Map();

  for(let i = 0; i < nums.length; i ++) {
    if (map.has(target - nums[i])) {
        return [map.get(target - nums[i]), i];
    } else {
        map.set(nums[i], i);
    }
  }

  return [];
}

export { twoSum, twoSumWithMap };