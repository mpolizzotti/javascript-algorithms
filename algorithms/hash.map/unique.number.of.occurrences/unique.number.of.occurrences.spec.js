import uniqueOccurrences from './unique.number.of.occurrences.mjs';

describe('uniqueOccurrences', () => {
  it('should return true when the number of occurrences of each value is unique', () => {
    const nums = [1,2,2,1,1,3];
    const result = uniqueOccurrences(nums);
    expect(result).toEqual(true);
  });

  it('should return false when the number of occurrences of each value is not unique', () => {
    const nums = [1,2];
    const result = uniqueOccurrences(nums);
    expect(result).toEqual(false);
  });
});
