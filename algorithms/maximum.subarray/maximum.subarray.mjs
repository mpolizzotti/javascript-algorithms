const maxSubArray = (nums) => {
  const maxArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      maxArray.push(nums[i]);
    } else {
      console.log(`(${maxArray[i - 1]} + ${nums[i]}, ${nums[i]})`);
      maxArray[i] = Math.max(maxArray[i - 1] + nums[i], nums[i])
      console.log(maxArray[i]);
    }
  }

  return Math.max(...maxArray);
}

export default maxSubArray;