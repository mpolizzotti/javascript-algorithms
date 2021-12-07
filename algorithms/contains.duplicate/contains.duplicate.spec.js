import { expect } from "@jest/globals";
import containsDuplicate from "./contains.duplicate.mjs";

describe('Contains Duplicate', () => {
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