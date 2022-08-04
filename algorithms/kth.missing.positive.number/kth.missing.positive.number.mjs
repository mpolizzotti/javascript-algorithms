/**
 * Solution for Kth Missing Positive Number.
 * see: https://leetcode.com/problems/kth-missing-positive-number/
 */
const findKthPositive = (arr, k) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const missing = arr[m] - m - 1;
    if (missing < k) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return l + k;
};


// const arr = [2,3,4,7,11];
// const k = 5;
// const arr = [1,2,3,4];
// const k = 2;
// console.log(findKthPositive(arr, k));

export default findKthPositive;
