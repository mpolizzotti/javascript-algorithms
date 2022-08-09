import { specialArrayCount, specialArray } from './special.array.with.x.elements.greater.than.or.equal.x.mjs';

describe('specialArray', () => {
  it('should return the value of x when there are exactly x numbers in nums that are greater than or equal to x', () => {
    const nums = [1,0,0,6,4,9];
    expect(specialArray(nums)).toEqual(3);
  });

  it('should return -1', () => {
    const nums = [1,1,2];
    expect(specialArray(nums)).toEqual(-1);
  });
});

describe('specialArrayCount', () => {
  it('should return the value of x when there are exactly x numbers in nums that are greater than or equal to x', () => {
    const nums = [1,0,0,6,4,9];
    expect(specialArrayCount(nums)).toEqual(3);
  });

  it('should return -1', () => {
    const nums = [1,1,2];
    expect(specialArrayCount(nums)).toEqual(-1);
  });
});
