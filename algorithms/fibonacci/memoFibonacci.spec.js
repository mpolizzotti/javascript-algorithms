import memoFibonacci from "./memoFibonacci.mjs";

describe('memoFibonacci()', () => {
  it('should return 1 for 0', () => {
    expect(memoFibonacci(0, {})).toEqual(1);
  });

  it('should return 1 for 1', () => {
    expect(memoFibonacci(1, {})).toEqual(1);
  });

  it('should return 2 for 2', () => {
    expect(memoFibonacci(2, {})).toEqual(2);
  });

  it('should return 3 for 3', () => {
    expect(memoFibonacci(3, {})).toEqual(3);
  });

  it('should return 5 for 4', () => {
    expect(memoFibonacci(4, {})).toEqual(5);
  });
});