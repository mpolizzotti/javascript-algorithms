import maximumSubarray from './maximum.subarray.mjs';

describe('maximumSubarray', () => {
  it('should return the sum of the largest contiguous subarray', () => {
    const numbers = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maximumSubarray(numbers)).toEqual(6);
  });

  it('should return the sum of the largest contiguous subarray', () => {
    const numbers = [5,4,-1,7,8];
    expect(maximumSubarray(numbers)).toEqual(23);
  });
});
