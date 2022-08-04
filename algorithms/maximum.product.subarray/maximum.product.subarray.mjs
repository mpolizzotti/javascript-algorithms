/**
 * Solution for Maximum Product Subarray.
 * Category: "Array"
 * see: https://leetcode.com/problems/maximum-product-subarray/
 */
const maxProductBruteForce = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }

  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let y = i; y < nums.length; y++) {
      product = product * nums[y];
      max = Math.max(product, max);
    }
  }

  return max;
};

const maxProductOptimized = (nums) => {
  let result = Math.max(...nums); // Default should not be 0. Find largest number and set to default.
  let currentMin = 1;
  let currentMax = 1;

  for (let i = 0; i < nums.length; i++) {
    const temp = currentMax * nums[i];
    currentMax = Math.max(nums[i] * currentMax, nums[i] * currentMin, nums[i]);
    currentMin = Math.min(temp, nums[i] * currentMin, nums[i]);
    result = Math.max(result, currentMax);
  }

  return result;
};

// const nums = [-2,0,-1];
// const nums = [2,3,-2,4];
// console.log(maxProductOptimized(nums));

export { maxProductBruteForce, maxProductOptimized };
