import duplicateZeros from './duplicate.zeros.mjs';

describe('duplicateZeros', () => {
  it('should duplicate zeros without extending size of array', () => {
    const numbers = [0,1,2,2,3,0,4,2];
    expect(duplicateZeros(numbers)).toEqual([0,0,1,2,2,3,0,0]);
  });

  it('should return the same array since no zeros exist', () => {
    const numbers = [1,2,3];
    expect(duplicateZeros(numbers)).toEqual([1,2,3]);
  });
});
