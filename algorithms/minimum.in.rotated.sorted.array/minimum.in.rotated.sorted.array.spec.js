import { findMin, findMinByBruteForce, findMinBinarySearch } from './minimum.in.rotated.sorted.array.mjs';

describe('findMin', () => {
  it('should return the minimum element in the sorted array of unique elements', () => {
    const numbers = [3,4,5,1,2];
    expect(findMin(numbers)).toEqual(1);
  });
});

describe('findMinByBruteForce', () => {
  it('should return the minimum element in the sorted array of unique elements', () => {
    const numbers = [3,4,5,1,2];
    expect(findMinByBruteForce(numbers)).toEqual(1);
  });
});

describe('findMinBinarySearch', () => {
  it('should return the minimum element in the sorted array of unique elements', () => {
    const numbers = [3,4,5,1,2];
    expect(findMinBinarySearch(numbers)).toEqual(1);
  });
});
