import search from './binary.search.leet.mjs';

describe('search', () => {
  it('should return the target in the nums array', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 9;
    expect(search(nums, target)).toEqual(4);
  });

  it('should return -1 when target in the nums array is not found', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 2;
    expect(search(nums, target)).toEqual(-1);
  });
});
