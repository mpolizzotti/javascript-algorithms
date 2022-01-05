import isEven from './is.even.mjs';

describe('isEven', () => {
  it('should return true for 2', () => {
    expect(minimumValue(2)).toEqual(true);
  });

  it('should return false for 3', () => {
    expect(minimumValue(3)).toEqual(false);
  });
});