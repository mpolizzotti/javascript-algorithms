import maxArea from './container.with.most.water.mjs';

describe('maxArea', () => {
  it('should return maximum area for container of water', () => {
    const numbers = [1,8,6,2,5,4,8,3,7];
    expect(maxArea(numbers)).toEqual(49);
  });

  it('should return maximum area for container of water', () => {
    const numbers = [1,1];
    expect(maxArea(numbers)).toEqual(1);
  });
});
