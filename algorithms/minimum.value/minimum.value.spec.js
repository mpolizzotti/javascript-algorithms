import minimumValue from './minimum.value.mjs';

describe('minimumValue', () => {
  it('should return 2 from [7, 9, 5, 2, 3]', () => {
    const n = [7, 9, 5, 2, 3];
    expect(minimumValue(n)).toEqual(2);
  });

  it('should return 1 from [1, 2, 3, 4, 5, 6, 7]', () => {
    const n = [1, 2, 3, 4, 5, 6, 7];
    expect(minimumValue(n)).toEqual(1);
  });
});