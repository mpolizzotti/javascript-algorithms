/**
 * Solution for Remove Duplicates from Sorted Array.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
const removeDuplicates = (numbers) => {
  let l = 0;

  while (l + 1 < numbers.length) {
    if (numbers[l] === numbers[l + 1]) {
      numbers.splice(l, 1);
    } else {
      l++;
    }
  }

  return numbers.length;
};

// const numbers = [0,0,1,1,1,2,2,3,3,4];
// const numbers = [1,2,3];
// const numbers = [1];
// console.log(removeDuplicates(numbers));

export default removeDuplicates;
