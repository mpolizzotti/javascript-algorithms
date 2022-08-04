import {
  checkIfExistHashMap,
  checkIfExistBinarySearch
} from './check.if.exist.mjs';

describe('checkIfExistHashMap', () => {
  it('should return true when two integers (n and m) multiplied is the double of m', () => {
    const nums = [10, 2, 5, 3];
    expect(checkIfExistHashMap(nums)).toEqual(true);
  });

  it('should return true when two integers (n and m) multiplied is the double of m', () => {
    const nums = [0, 0];
    expect(checkIfExistHashMap(nums)).toEqual(true);
  });

  it('should return true when two integers (n and m) multiplied is the double of m', () => {
    const nums = [3, 1, 7, 11];
    expect(checkIfExistHashMap(nums)).toEqual(false);
  });
});

describe('checkIfExistBinarySearch', () => {
  it('should return true when two integers (n and m) multiplied is the double of m', () => {
    const nums = [10, 2, 5, 3];
    expect(checkIfExistBinarySearch(nums)).toEqual(true);
  });

  it('should return true when two integers (n and m) multiplied is the double of m', () => {
    const nums = [0, 0];
    expect(checkIfExistBinarySearch(nums)).toEqual(true);
  });

  it('should return true when two integers (n and m) multiplied is the double of m', () => {
    const nums = [3, 1, 7, 11];
    expect(checkIfExistBinarySearch(nums)).toEqual(false);
  });
});
