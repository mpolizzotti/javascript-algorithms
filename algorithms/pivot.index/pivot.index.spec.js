import { pivotIndex, pivotIndexOptimized } from './pivot.index.mjs'

describe('pivotIndex', () => {
  it('should return 3 for [1, 7, 3, 6, 5, 6]', () => {
    const numbers = [1, 7, 3, 6, 5, 6];
    expect(pivotIndex(numbers)).toEqual(3);
  });

  it('should return -1 for [1,2,3]', () => {
    const numbers = [1,2,3];
    expect(pivotIndex(numbers)).toEqual(-1);
  });

  it('should return 0 for [2,1,-1]', () => {
    const numbers = [2,1,-1];
    expect(pivotIndex(numbers)).toEqual(0);
  });

  it('should return -1 for [-1,-1,-1,-1,1,1]', () => {
    const numbers = [-1,-1,-1,-1,1,1];
    expect(pivotIndex(numbers)).toEqual(-1);
  });
});


describe('pivotIndexOptimized', () => {
  it('should return 3 for [1, 7, 3, 6, 5, 6]', () => {
    const numbers = [1, 7, 3, 6, 5, 6];
    expect(pivotIndexOptimized(numbers)).toEqual(3);
  });

  it('should return -1 for [1,2,3]', () => {
    const numbers = [1,2,3];
    expect(pivotIndexOptimized(numbers)).toEqual(-1);
  });

  it('should return 0 for [2,1,-1]', () => {
    const numbers = [2,1,-1];
    expect(pivotIndexOptimized(numbers)).toEqual(0);
  });

  it('should return -1 for [-1,-1,-1,-1,1,1]', () => {
    const numbers = [-1,-1,-1,-1,1,1];
    expect(pivotIndexOptimized(numbers)).toEqual(-1);
  });
});
