import { containsDuplicate, containsDuplicateWithMap } from './contains.duplicate.mjs';

describe('containsDuplicate', () => {
  it('should return true when duplicate exists', () => {
    const nums = [1,2,3,1];
    const result = containsDuplicate(nums);
    expect(result).toEqual(true)
  });

  it('should return false when no duplicate exists', () => {
    const nums = [4,2,5,1];
    const result = containsDuplicate(nums);
    expect(result).toEqual(false)
  });
});

describe('containsDuplicateWithMap', () => {
  it('should return true when duplicate exists', () => {
    const nums = [1,2,3,1];
    const result = containsDuplicateWithMap(nums);
    expect(result).toEqual(true)
  });

  it('should return false when no duplicate exists', () => {
    const nums = [4,2,5,1];
    const result = containsDuplicateWithMap(nums);
    expect(result).toEqual(false)
  });
});
