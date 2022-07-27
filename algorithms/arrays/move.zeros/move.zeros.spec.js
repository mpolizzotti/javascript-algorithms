import moveZeros from './moveZeros.mjs';

describe('moveZeros', () => {
  it('should move all zeros to end of array', () => {
    const numbers = [0,1,0,3,12];
    expect(moveZeros(numbers)).toEqual([1,3,12,0,0]);
  });

  it('should move all zeros to end of array', () => {
    const numbers = [0,0,1,1,1,2,2,3,3,4];
    expect(moveZeros(numbers)).toEqual([1,1,1,2,2,3,3,4,0,0]);
  });
});
