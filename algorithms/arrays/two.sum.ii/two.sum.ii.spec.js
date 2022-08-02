import { twoSumWithMap, twoSumWithPointers } from './two.sum.ii.mjs';

describe('twoSumWithMap', () => {
  it('should return indices of two numbers to equal target', () => {
    const numbers = [2,7,11,15];
    const target = 9;
    expect(twoSumWithMap(numbers, target)).toEqual([1,2]);
  });

  it('should return indices of two numbers to equal target', () => {
    const numbers = [2,3,4];
    const target = 6;
    expect(twoSumWithMap(numbers, target)).toEqual([1,3]);
  });

  it('should return indices of two numbers to equal target', () => {
    const numbers = [-1,0];
    const target = -1;
    expect(twoSumWithMap(numbers, target)).toEqual([1,2]);
  });
});

describe('twoSumWithPointers', () => {
  it('should return indices of two numbers to equal target', () => {
    const numbers = [2,7,11,15];
    const target = 9;
    expect(twoSumWithPointers(numbers, target)).toEqual([1,2]);
  });

  it('should return indices of two numbers to equal target', () => {
    const numbers = [2,3,4];
    const target = 6;
    expect(twoSumWithPointers(numbers, target)).toEqual([1,3]);
  });

  it('should return indices of two numbers to equal target', () => {
    const numbers = [-1,0];
    const target = -1;
    expect(twoSumWithPointers(numbers, target)).toEqual([1,2]);
  });
});
