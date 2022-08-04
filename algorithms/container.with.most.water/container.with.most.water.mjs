/**
 * Solution for Container With Most Water.
 * Category: "Array", "Two Pointers"
 * see: https://leetcode.com/problems/container-with-most-water/
 */
const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1; // 8
  let maxArea = 0;

  while (l < r) {
    let minHeight = Math.min(height[l], height[r]);
    let area =  minHeight * (r - l);
    maxArea = Math.max(maxArea, area);

    if (height[r] > height[l]) {
      l = l + 1;
    } else if (height[r] < height[l]) {
      r = r - 1;
    } else {
      l = l + 1;
    }
  }

  return maxArea;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));

export default maxArea;
