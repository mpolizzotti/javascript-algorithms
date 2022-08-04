/**
 * Solution for Maximum Difference Between Increasing Elements Challenge.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/maximum-difference-between-increasing-elements/
 */
const maxDifference = (nums) => {
  let left = 0;
  let right = 1;
  let maxDifference = 0;

  while (right < nums.length) {
    if (nums[left] < nums[right]) {
      // Calculate the difference.
      const difference = nums[right] - nums[left];
      maxDifference = Math.max(maxDifference, difference);
    } else {
      left = right;
    }

    right += 1;
  }

  return (!maxDifference) ? -1 : maxDifference;
};

// Explanation:
// Uses "two pointers" to track the increasing distance between elements.
// Creates a sliding window.

// Time Complexity: O(n) or Linear Time.

// const numbers = [9,4,3,2];
// console.log(maxDifference(numbers));

export default maxDifference;
