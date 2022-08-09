/**
 * Solution for Fair Candy Swap
 * see: https://leetcode.com/problems/fair-candy-swap/
 */
const fairCandySwap = (aliceSizes, bobSizes) => {
  let setB = new Set();
  let aliceSum = 0;
  let bobSum = 0;
  let result = [];

  // Sum all of alice sizes.
  aliceSizes.forEach((size) => aliceSum += size);
  // Sum all of bob sizes.
  bobSizes.forEach((size) => bobSum += size);
  // Calculate the delta or difference.
  const delta = (bobSum - aliceSum) / 2;

  // Add bob sizes to a set.
  bobSizes.forEach((x) => setB.add(x));

  // Iterate over aliceSizes to find [x, y].
  for (let i = 0; i < aliceSizes.length; i++) {
    const value = aliceSizes[i] + delta;
    if (setB.has(value)) {
      return [aliceSizes[i], value];
    }
  }

  return result;
};

// Explanation:
// Use y = (x + (sumA - sumB) / 2) formula.

// const bobSizes = [1,1];
// const aliceSizes = [2,2];
// console.log(fairCandySwap(aliceSizes, bobSizes));

export default fairCandySwap;
