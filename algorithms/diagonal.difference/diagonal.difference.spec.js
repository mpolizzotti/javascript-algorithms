import { expect } from "@jest/globals";
import diagonalDifference from "./diagonal.difference.mjs";

describe('Diagonal Difference', () => {
  it('should return 15', () => {
    const arr = [[11,2,4],[4,5,6],[10,8,-12]];
    const result = diagonalDifference(arr);
    expect(result).toEqual(15);
  });

  it('should return 37', () => {
    const arr = [[-11,-2,4],[-4,-5,-6],[10,-8,-12]];
    const result = diagonalDifference(arr);
    expect(result).toEqual(37);
  });

  it('should return 9', () => {
    const arr = [[11,2,4],[4,5,6],[10,8,12]];
    const result = diagonalDifference(arr);
    expect(result).toEqual(9);
  });
});