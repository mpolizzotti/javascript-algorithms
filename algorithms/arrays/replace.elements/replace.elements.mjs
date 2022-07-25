/**
 * Solution for Replace Elements with Greatest Element on Right Side.
 * Category: "Brute Force"
 * see: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */
const replaceElements = (arr) => {
  for (let l = 0; l < arr.length; l++) {
    let max = 0;

    for (let r = l + 1; r < arr.length; r++) {
      const right = arr[r];
      max = Math.max(max, right);
    }

    if (l === arr.length - 1) {
      arr[l] = -1;
    } else {
      arr[l] = max;
    }
  }

  return arr;
};

/**
 * Solution for Replace Elements with Greatest Element on Right Side.
 * Category: "Iterate Backwards Through Array"
 * see: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
 */
const replaceElementsOptimized = (arr) => {
  let result = new Array(arr.length);
  result.fill(0);
  result[result.length - 1] = -1;

  for (let i = arr.length - 1; i > 0; i--) {
    result[i - 1] = Math.max(arr[i], result[i]);
  }

  return result;
};

// Explanation:
// - Create a result array of the same length as the incoming array.
// - Set the last element of the result array to -1.
// - Iterate over the incoming array backwards.
// - Find the Math.max() of arr[i] and result[i].
// - The result of the Math.max() operation becomes the new value for result[i - 1].

// const arr = [17,18,5,4,6,1];
// console.log(replaceElementsOptimized(arr));

export { replaceElements, replaceElementsOptimized };
