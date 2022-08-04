import removeDuplicates from './remove.duplicates.from.sorted.array.mjs';

describe('removeDuplicates', () => {
  it('should return 5', () => {
    const numbers = [0,0,1,1,1,2,2,3,3,4];
    expect(removeDuplicates(numbers)).toEqual(5);
  });

  it('should return 2', () => {
    const numbers = [1,2];
    expect(removeDuplicates(numbers)).toEqual(2);
  });

  it('should return 3', () => {
    const numbers = [1,2,3];
    expect(removeDuplicates(numbers)).toEqual(3);
  });
});
