/**
 * Solution for Two Sum II.
 * Category: "Array", "Two Pointers", "Binary Search"
 * see: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
const twoSumWithMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const targetMinusValue = target - nums[i];
    if (!map.has(targetMinusValue)) {
      map.set(nums[i], i);
    } else {
      return [(map.get(targetMinusValue) + 1), i + 1];
    }
  }
};

const twoSumWithPointers = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if ((nums[l] + nums[r]) > target) { // Sum is too big.
      r = r - 1;
    } else if ((nums[l] + nums[r]) < target) { // Sum is too small.
      l = l + 1;
    } else { // Sum is a match.
      return [l + 1, r + 1];
    }
  }

  return [];
}

const numbers = [2,7,11,15];
const target = 9;
console.log(twoSumWithPointers(numbers, target));

export { twoSumWithMap, twoSumWithPointers };
