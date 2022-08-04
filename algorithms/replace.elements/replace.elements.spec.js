import { replaceElements, replaceElementsOptimized } from './replace.elements.mjs';

describe('replaceElements', () => {
  it('should return array with greatest element on the right side', () => {
    const arr = [17,18,5,4,6,1];
    expect(replaceElements(arr)).toEqual([18,6,6,6,1,-1]);
  });

  it('should return an array with a -1 at the first index', () => {
    const arr = [400];
    expect(replaceElements(arr)).toEqual([-1]);
  });
});

describe('replaceElementsOptimized', () => {
  it('should return array with greatest element on the right side', () => {
    const arr = [17,18,5,4,6,1];
    expect(replaceElementsOptimized(arr)).toEqual([18,6,6,6,1,-1]);
  });

  it('should return an array with a -1 at the first index', () => {
    const arr = [400];
    expect(replaceElementsOptimized(arr)).toEqual([-1]);
  });
});
