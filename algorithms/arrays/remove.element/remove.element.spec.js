import removeElements from './remove.element.mjs';

describe('removeElements', () => {
  it('should return 5', () => {
    const numbers = [0,1,2,2,3,0,4,2];
    const val = 2;
    expect(removeElements(numbers, val)).toEqual(5);
  });

  it('should return 2', () => {
    const numbers = [3,2,2,3];
    const val = 3;
    expect(removeElements(numbers, val)).toEqual(2);
  });
});
