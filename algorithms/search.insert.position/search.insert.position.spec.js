import searchInsert from './search.insert.position.mjs';

describe('search', () => {
  it('should return the index of the target when found', () => {
    const nums = [1,3,5,6];
    const target = 5;
    expect(searchInsert(nums, target)).toEqual(2);
  });

  it('should return the insertion point of the target when not found in array', () => {
    const nums = [1,3];
    const target = 0;
    expect(searchInsert(nums, target)).toEqual(0);
  });
});
