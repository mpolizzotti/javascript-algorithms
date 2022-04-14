import recursiveFibonacci from "./recursiveFibonacci.mjs";

describe('recursiveFibonacci()', () => {
  it('should return 1 for 0', () => {
    expect(recursiveFibonacci(0)).toEqual(1);
  });

  it('should return 1 for 1', () => {
    expect(recursiveFibonacci(1)).toEqual(1);
  });

  it('should return 2 for 2', () => {
    expect(recursiveFibonacci(2)).toEqual(2);
  });

  it('should return 3 for 3', () => {
    expect(recursiveFibonacci(3)).toEqual(3);
  });

  it('should return 5 for 4', () => {
    expect(recursiveFibonacci(4)).toEqual(5);
  });
});