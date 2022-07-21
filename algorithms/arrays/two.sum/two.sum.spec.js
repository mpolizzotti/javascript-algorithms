import { twoSum, twoSumWithMap } from "./two.sum.mjs";

describe('twoSum', () => {
  it('should return [0, 1] indices', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });
});

describe('twoSumWithMap', () => {
  it('should return [0, 1] indices', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSumWithMap(nums, target);
    expect(result).toEqual(expected);
  });
});