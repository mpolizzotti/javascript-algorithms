import { missingNumber, missingNumberWithBinarySearch } from './missing.number.mjs';

describe('missingNumber', () => {
  it('should return the only number in the range that is missing from array', () => {
    const numbers = [3,0,1];
    expect(missingNumber(numbers)).toEqual(2);
  });

  it('should return the only number in the range that is missing from array', () => {
    const numbers = [0,1];
    expect(missingNumber(numbers)).toEqual(2);
  });

  it('should return the only number in the range that is missing from array', () => {
    const numbers = [9,6,4,2,3,5,7,0,1];
    expect(missingNumber(numbers)).toEqual(8);
  });
});

describe('missingNumberWithBinarySearch', () => {
  it('should return the only number in the range that is missing from array', () => {
    const numbers = [3,0,1];
    expect(missingNumberWithBinarySearch(numbers)).toEqual(2);
  });

  it('should return the only number in the range that is missing from array', () => {
    const numbers = [0,1];
    expect(missingNumberWithBinarySearch(numbers)).toEqual(2);
  });

  it('should return the only number in the range that is missing from array', () => {
    const numbers = [9,6,4,2,3,5,7,0,1];
    expect(missingNumberWithBinarySearch(numbers)).toEqual(8);
  });
});
