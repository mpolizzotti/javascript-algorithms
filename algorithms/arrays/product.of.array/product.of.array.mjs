const productOfArrayExceptSelf = (nums) => {
  const result = new Array(nums.length);
  let prefix = 1;
  let postfix = 1;

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
  for (let y = nums.length -1; y >= 0; y--) {
    result[y] = result[y] * postfix; // 6
    postfix = postfix * nums[y]; // 4
  }

  return result;
};

const nums = [1,2,3,4];
console.log(productOfArrayExceptSelf(nums));

export default productOfArrayExceptSelf;
