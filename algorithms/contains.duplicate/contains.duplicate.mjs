const containsDuplicate = function(nums) {
  // Define a Set, which only allows unique values
  // and compare it with the length of the nums array.
  return new Set(nums).size < nums.length;
};

export default containsDuplicate;