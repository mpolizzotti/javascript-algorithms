import intersect from "./intersect.mjs";

describe('intersect', () => {
  it('should return [1]', () => {
    const nums1 = [1,2];
    const nums2 = [1,1];
    const expected = [1];
    expect(intersect(nums1, nums2)).toEqual(expected);
  });

  it('should return [2,2]', () => {
    const nums1 = [1,2,2,1];
    const nums2 = [2,2];
    const expected = [2,2];
    expect(intersect(nums1, nums2)).toEqual(expected);
  });

  it('should return [4,9]', () => {
    const nums1 = [4,9,5];
    const nums2 = [9,4,9,8,4];
    const expected = [4,9];
    expect(intersect(nums1, nums2)).toEqual(expected);
  });
});