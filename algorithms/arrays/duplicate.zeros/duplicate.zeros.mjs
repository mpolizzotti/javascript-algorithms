/**
 * Solution for Duplicate Zeros.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/duplicate-zeros/
 */
const duplicateZeros = (arr) => {
  let l = 0;
  let r = 1;

  while (r < arr.length) {
    if (arr[l] === 0) {
      arr.splice(l, 0, 0);
      arr.pop();
      l = l + 2;
      r = r + 1;
    } else {
      l++;
      r++;
    }
  }

  return arr;
};

// const arr = [1,0,2,3,0,4,5,0];
// console.log(duplicateZeros(arr));

export default duplicateZeros;
