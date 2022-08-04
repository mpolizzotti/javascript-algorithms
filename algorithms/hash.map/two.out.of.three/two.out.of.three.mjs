/**
 * Solution for Two Out of Three
 * see: https://leetcode.com/problems/two-out-of-three/
 */
const twoOutOfThree = (nums1, nums2, nums3) => {
  const combined = [].concat(
    ...new Set(nums1),
    ...new Set(nums2),
    ...new Set(nums3),
  );
  const tracker = new Map();
  const result = [];

  combined.forEach((value) => {
    if (!tracker.has(value)) {
      tracker.set(value, 1);
    } else {
      tracker.set(value, tracker.get(value) + 1);
      if (!result.includes(value)) {
        result.push(value);
      }
    }
  });

  return result;
};

const nums1 = [1,1,3,2];
const nums2 = [2,3];
const nums3 = [3];
console.log(twoOutOfThree(nums1, nums2, nums3));

export default twoOutOfThree;
