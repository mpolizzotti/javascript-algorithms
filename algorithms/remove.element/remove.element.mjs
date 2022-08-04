/**
 * Solution for Remove Element.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/remove-element/
 */
const removeElements = (nums, val) => {
  let l = 0;

  while (l < nums.length) {
    if (nums[l] === val) {
      nums.splice(l, 1);
      l--;
    }

    l++;
  }

  return nums.length;
};


// const nums = [0,1,2,2,3,0,4,2];
// const val = 2;
// console.log(removeElements(nums, val));

export default removeElements;
