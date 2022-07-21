import maxDifference from './max.difference.mjs';

describe('maxDifference', () => {
  it('should return a distance of 4', () => {
    const numbers = [7,1,5,4];
    expect(maxDifference(numbers)).toEqual(4);
  });

  it('should return a -1', () => {
    const numbers = [9,4,3,2];
    expect(maxDifference(numbers)).toEqual(-1);
  });

  it('should return a distance of 9', () => {
    const numbers = [1,5,2,10];
    expect(maxDifference(numbers)).toEqual(9);
  });
});
