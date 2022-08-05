const targetIndicesBruteForce = (nums, target) => {
  const sorted = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      result.push(i);
    }
  }

  return result;
}

const targetIndicesBinarySearch = (nums, target) => {
  nums.sort((a, b) => a - b)
  let index = binarySearch(nums, target)

  if (index === -1) {
    return [];
  }

  let res = [index];
  let l_index = index - 1;
  let r_index = index + 1;

  for (let i = l_index; i >= 0; i--) {
    if (nums[i] === target) {
      res.unshift(i)
    } else {
      break
    }
  }

  for (let i = r_index; i <= nums.length; i++) {
    if (nums[i] === target) {
      res.push(i)
    } else {
      return res
    }
  }
};

const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor(((l + r) / 2));

    if (nums[m] === target) {
      return m;
    }

    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return -1;
};

const nums = [1, 2, 5, 2, 3, 2, 2];
const target = 2;
// const nums = [1,2,5,2,3];
// const target = 3;
// const nums = [11,34,45,45,45,41];
// const target = 45;
// console.log(targetIndicesBinarySearch(nums, target));

export { targetIndicesBruteForce, targetIndicesBinarySearch };