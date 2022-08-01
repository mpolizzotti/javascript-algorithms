import { maxProductBruteForce, maxProductOptimized } from './maximum.product.subarray.mjs';

describe('maxProductBruteForce()', () => {
  it('should return non-empty subarray that has the largest product', () => {
    const numbers = [2,3,-2,4];
    expect(maxProductBruteForce(numbers)).toEqual(6);
  });

  it('should return non-empty subarray that has the largest product', () => {
    const numbers = [-2,0,-1];
    expect(maxProductBruteForce(numbers)).toEqual(0);
  });
});

describe('maxProductOptimized()', () => {
  it('should return non-empty subarray that has the largest product', () => {
    const numbers = [2,3,-2,4];
    expect(maxProductOptimized(numbers)).toEqual(6);
  });

  it('should return non-empty subarray that has the largest product', () => {
    const numbers = [-2,0,-1];
    expect(maxProductOptimized(numbers)).toEqual(0);
  });
});
