/**
 * Solution to Check If N and Its Double Exist
 * see: https://leetcode.com/problems/check-if-n-and-its-double-exist/
 */
const checkIfExistHashMap = (arr) => {
  let exist = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (exist.has(arr[i])) {
      return true;
    }

    exist.add(arr[i] / 2);
    exist.add(arr[i] * 2);
  }

  return false;
};

const checkIfExistBinarySearch = (arr) => {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // Loop over array and double values.
    let target = 2 * arr[i];
    let result = binarySearch(arr, target);

    if (result !== i && result !== -1) {
      return true;
    }
  };

  return false;
}

const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    // Find the middle of the array.
    let m = Math.floor((r + l) / 2);

    // When our middle is equal to our target.
    if (nums[m] === target) {
      return m;
    }

    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    }
  }

  return -1;
};

// const arr = [-10,12,-20,-8,15];
// const arr = [10, 2, 5, 3];
// const arr = [0,0];
// console.log(checkIfExistBinarySearch(arr));

export { checkIfExistHashMap, checkIfExistBinarySearch };
