import { sortedSquares, sortedSquaresWithPointers } from './squares.of.sorted.array.mjs';

describe('sortedSquares', () => {
  it('should return an array of the squares of each number sorted in non-decreasing order', () => {
    const nums = [-4,-1,0,3,10];
    expect(sortedSquares(nums)).toEqual([0,1,9,16,100]);
  });

  it('should return an array of the squares of each number sorted in non-decreasing order', () => {
    const nums = [-7,-3,2,3,11];
    expect(sortedSquares(nums)).toEqual([4,9,9,49,121]);
  });
});

describe('sortedSquaresWithPointers', () => {
  it('should return an array of the squares of each number sorted in non-decreasing order', () => {
    const nums = [-4,-1,0,3,10];
    expect(sortedSquaresWithPointers(nums)).toEqual([0,1,9,16,100]);
  });

  it('should return an array of the squares of each number sorted in non-decreasing order', () => {
    const nums = [-7,-3,2,3,11];
    expect(sortedSquaresWithPointers(nums)).toEqual([4,9,9,49,121]);
  });
});
