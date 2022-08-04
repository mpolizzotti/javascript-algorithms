/**
 * Solution for Move Zeroes.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/move-zeroes/
 */
const moveZeros = (nums) => {
  let l = 0;
  let r = 1;

  while (r < nums.length) {
    if (nums[l] === 0) {
      const cached = nums[l];
      nums.splice(l, 1);
      nums.push(cached);
    } else {
      l++;
    }

    r++;
  }

  return nums;
};

// Explanation:
// - Use r (right pointer) as the iterator.
// - Only iterate l (left pointer) when value is not 0.
// - We don't iterate l (left pointer) when value is 0 because the index position
//   changes when the array is spliced.

// const nums = [0,1,0,3,12];
// const nums = [0,0,1];
// console.log(moveZeros(nums));

export default moveZeros;
