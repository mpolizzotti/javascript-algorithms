import threeSum from './three.sum.mjs';

describe('threeSum', () => {
  it('should return all triplets that sum to 0 without duplicates', () => {
    const numbers = [-1,0,1,2,-1,-4];
    expect(threeSum(numbers)).toEqual([[-1,-1,2],[-1,0,1]]);
  });

  it('should return all triplets that sum to 0 without duplicates', () => {
    const numbers = [0,1,1];
    expect(threeSum(numbers)).toEqual([]);
  });

  it('should return all triplets that sum to 0 without duplicates', () => {
    const numbers = [0,0,0];
    expect(threeSum(numbers)).toEqual([[0,0,0]]);
  });
});
