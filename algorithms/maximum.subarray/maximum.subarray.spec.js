import maxSubArray from "./maximum.subarray.mjs";

describe('maxSubArray()', () => {
  it('should return 6 for maximum subarray', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    const result = maxSubArray(nums);
    console.log(result);
    expect(result).toEqual(6);
  });
});