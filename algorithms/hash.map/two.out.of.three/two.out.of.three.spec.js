import twoOutOfThree from './two.out.of.three.mjs';

describe('twoOutOfThree', () => {
  it('should return a distinct array containing all the values that are present in at least two out of the three arrays', () => {
    const nums1 = [1,1,3,2];
    const nums2 = [2,3];
    const nums3 = [3];
    expect(twoOutOfThree(nums1, nums2, nums3)).toEqual([2,3]);
  });
});
