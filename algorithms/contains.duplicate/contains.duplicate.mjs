const containsDuplicate = function(nums) {
  // Define a Set, which only allows unique values
  // and compare it with the length of the nums array.
  return new Set(nums).size < nums.length;
};

const containsDuplicateWithMap = (nums) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], true);
    } else {
      return true;
    }
  }

  return false;
};

// const nums = [1,2,3,1];
// console.log(containsDuplicateHashSet(nums));

export { containsDuplicate, containsDuplicateWithMap };
