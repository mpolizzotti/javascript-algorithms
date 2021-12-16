import { merge, mergeAlternativeSolution } from './merge.sorted.array.mjs';

describe('mergeAlternativeSolution', () => {
  it('should return [1,2,2,3,5,6]', () => {
    const nums1 = [1,2,3];
    const m = 3;
    const nums2 = [2,5,6];
    const n = 3
    const result = mergeAlternativeSolution(nums1, m, nums2, n);
    const expected = [1,2,2,3,5,6];
    expect(result).toEqual(expected);
  });

  it('should return [1]', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0
    const result = mergeAlternativeSolution(nums1, m, nums2, n);
    const expected = [1];
    expect(result).toEqual(expected);
  });

  it('should return [1]', () => {
    const nums1 = [];
    const m = 0;
    const nums2 = [1];
    const n = 1
    const result = mergeAlternativeSolution(nums1, m, nums2, n);
    const expected = [1];
    expect(result).toEqual(expected);
  });
});

describe('merge', () => {
  it('should return [1,2,2,3,5,6]', () => {
    const nums1 = [1,2,3];
    const m = 3;
    const nums2 = [2,5,6];
    const n = 3
    const result = merge(nums1, m, nums2, n);
    const expected = [1,2,2,3,5,6];
    expect(result).toEqual(expected);
  });

  it('should return [1]', () => {
    const nums1 = [1];
    const m = 1;
    const nums2 = [];
    const n = 0
    const result = merge(nums1, m, nums2, n);
    const expected = [1];
    expect(result).toEqual(expected);
  });

  it('should return [1]', () => {
    const nums1 = [];
    const m = 0;
    const nums2 = [1];
    const n = 1
    const result = merge(nums1, m, nums2, n);
    const expected = [1];
    expect(result).toEqual(expected);
  });
});