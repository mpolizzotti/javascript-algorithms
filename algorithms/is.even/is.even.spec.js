import isEven from './is.even.mjs';

describe('isEven', () => {
  it('should return true for 2', () => {
    expect(isEven(2)).toEqual(true);
  });

  it('should return false for 3', () => {
    expect(isEven(3)).toEqual(false);
  });
});