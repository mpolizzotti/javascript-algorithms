/**
 * Solution for Product of Array Except Self.
 * Category: "Array", "Prefix Sum"
 * see: https://leetcode.com/problems/product-of-array-except-self/
 */
const productOfArrayExceptSelf = (nums) => {
  const result = new Array(nums.length);
  let prefix = 1;
  let suffix = 1;

  // Calculate the 'prefix' values by iterating over the array
  // from front to back.
  for (let i = 0; i < nums.length; i++) {
    // Add 1 to all places within the result array.
    result[i] = prefix;
    // Compute the prefix.
    prefix = prefix * nums[i];
  }

  // Calculate the 'postfix' values by iterating over the array
  // from back to front.
  for (let y = nums.length - 1; y >= 0; y--) {
    result[y] = result[y] * suffix;
    suffix = suffix * nums[y];
  }

  return result;
};

// const nums = [1,2,3,4];
// console.log(productOfArrayExceptSelf(nums));

export default productOfArrayExceptSelf;
