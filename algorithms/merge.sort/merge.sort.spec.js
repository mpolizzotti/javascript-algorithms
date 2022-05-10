import mergeSort from './merge.sort.mjs'

describe('mergeSort', () => {
  it('should sort the array', () => {
    const arr = [-10, 33, 5, 10, 3, -19, -99, 100];
    const sorted = [-99, -19, -10, 3, 5,  10,  33, 100];
    expect(mergeSort(arr)).toEqual(sorted);
  });
});