/**
 * Solution for Three Sum.
 * Category: "Array", "Two Pointers", "Sorting"
 * see: https://leetcode.com/problems/3sum/
 */
const threeSum = (numbers) => {
  numbers.sort((a,b) => a - b);
  const target = 0;
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) {
      continue;
    }

    let a = numbers[i];
    let b = i + 1;
    let c = numbers.length - 1;

    while (b < c) {
      const threeSum = a + numbers[b] + numbers[c];

      if (threeSum > target) { // Greater then zero.
        c = c - 1;
      } else if (threeSum < target ) { // Less then zero.
        b = b + 1;
      } else {
        result.push([ a, numbers[b], numbers[c] ]);
        b = b + 1;
        while (numbers[b] === numbers[b - 1] && b < c) {
          b = b + 1;
        }
      }
    }
  }

  return result;
};

// const nums = [-3,3,4,-3,1,2];
// const nums = [-1,0,1,2,-1,-4];
// const nums = [0,1,1];
// const nums = [-1,0,1,2,-1,-4];
// console.log(threeSum(nums));

export default threeSum;
