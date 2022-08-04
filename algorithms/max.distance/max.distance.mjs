
/**
 * Solution for Two Furthest Houses With Different Colors.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/two-furthest-houses-with-different-colors/
 */
const maxDistance = (colors) => {
  let l = colors[0];
  let r = colors[colors.length - 1];
  let max = 0;

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] !== l) {
      max = Math.max(max, i);
    }

    if (colors[i] !== r) {
      max = Math.max(max, colors.length - 1 - i);
    }
  }

  return max;
};

// Time complexity: O(n) or Linear Time.

// const colors = [1,8,3,8,3];
// console.log(maxDistance(colors));

export default maxDistance;
