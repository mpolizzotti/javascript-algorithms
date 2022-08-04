import findKthPositive from './kth.missing.positive.number.mjs';

describe('findKthPositive', () => {
  it('should return the kth positive number that is missing from array', () => {
    const arr = [2,3,4,7,11];
    const k = 5;
    expect(findKthPositive(arr, k)).toEqual(9);
  });

  it('should return the kth positive number that is missing from array', () => {
    const arr = [1,2,3,4];
    const k = 2;
    expect(findKthPositive(arr, k)).toEqual(6);
  });
});
