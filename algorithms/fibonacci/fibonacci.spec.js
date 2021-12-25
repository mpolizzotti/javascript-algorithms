import fibonacci from "./fibonacci.mjs";

describe('fibonacci()', () => {
  it('should return 1 for 0', () => {
    expect(fibonacci(0)).toEqual(1);
  });

  it('should return 1 for 1', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  it('should return 2 for 2', () => {
    expect(fibonacci(2)).toEqual(2);
  });

  it('should return 3 for 3', () => {
    expect(fibonacci(2)).toEqual(2);
  });

  it('should return 5 for 4', () => {
    expect(fibonacci(4)).toEqual(5);
  });

  it('should return 8 for 5', () => {
    expect(fibonacci(5)).toEqual(8);
  });
});