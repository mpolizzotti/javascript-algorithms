import maxDistance from './max.distance.mjs';

describe('maxDistance', () => {
  it('should return a max distance of 3', () => {
    const colors = [1,1,1,6,1,1,1];
    expect(maxDistance(colors)).toEqual(3);
  });

  it('should return a max distance of 4', () => {
    const colors = [1,8,3,8,3];
    expect(maxDistance(colors)).toEqual(4);
  });

  it('should return a max distance of 1', () => {
    const colors = [0,1];
    expect(maxDistance(colors)).toEqual(1);
  });
});
