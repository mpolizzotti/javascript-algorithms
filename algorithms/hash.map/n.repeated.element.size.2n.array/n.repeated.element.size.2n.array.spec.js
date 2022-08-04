import repeatedNTimes from './n.repeated.element.size.2n.array.mjs';

describe('repeatedNTimes', () => {
  it('should return the element that is repeated', () => {
    expect(repeatedNTimes([1,2,3,3])).toEqual(3);
  });

  it('should return -1 when no element is repeated', () => {
    expect(repeatedNTimes([1,2,3])).toEqual(-1);
  });
});
