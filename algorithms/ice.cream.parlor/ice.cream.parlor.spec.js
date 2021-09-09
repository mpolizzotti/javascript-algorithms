import iceCreamParlor from './ice.cream.parlor.mjs';

describe('iceCreamParlor()', () => {
  it('should return [1,4] indices', () => {
    const m = 6;
    const arr = [1,3,4,5,6];
    const result = iceCreamParlor(m, arr);
    const expected = [1,4];
    expect(result).toEqual(expected);
  });

  it('should return [1,2] indices', () => {
    const m = 5;
    const arr = [1,4,5,3,2];
    const result = iceCreamParlor(m, arr);
    const expected = [1,2];
    expect(result).toEqual(expected);
  });
});
