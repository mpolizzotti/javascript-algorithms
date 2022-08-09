/**
 * Solution for Special Array With X Elements Greater Than or Equal X
 * see: https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */
const specialArrayCount = (nums) => {
  let count = 0;

  while (nums.length >= 0) {
    let j = 0;
    nums.forEach((item) => {
      if (item >= count) {
        j++;
      }
    });

    if (j === count) {
      return count;
    }

    count++;

    if (count > nums.length) {
      break;
    }
  }

  return -1;
};


const specialArray = (nums) => {
  nums.sort((a, b) => a - b);
  let l = 0;
  let length = nums.length;
  let r = length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const middleNumber = nums[m];
    const positionsToEnd = (length - m);

    if (middleNumber >= positionsToEnd) {
      if (m === 0 || nums[m - 1] < positionsToEnd) {
        return positionsToEnd;
      } else {
        r = m - 1;
      }
    } else {
      l = m + 1;
    }
  }

  return -1;
};

// const nums = [0,4,3,0,4];
// const nums = [1,5];
// const nums = [0,0];
// const nums = [1,0,0,6,4,9]; // 3
// const nums = [1,1,2]; // -1
// console.log(specialArray(nums));

export { specialArrayCount, specialArray };
