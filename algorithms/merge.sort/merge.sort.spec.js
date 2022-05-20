import mergeSort from './merge.sort.mjs'

describe('mergeSort', () => {
  it('should immediately return when array has a single element', () => {
    const arr = [10];
    expect(mergeSort(arr)).toEqual([10]);
  });

  it('should sort array when array has two elements', () => {
    const arr = [10, 5];
    expect(mergeSort(arr)).toEqual([5, 10]);
  });

  it('should sort array with five elements', () => {
    const arr = [-10, 33, 5, 10, 3];
    expect(mergeSort(arr)).toEqual([-10, 3, 5, 10, 33]);
  });

  it('should sort array with more then five elements', () => {
    const arr = [-10, 33, 5, 10, 3, -19, -99, 100];
    expect(mergeSort(arr)).toEqual([-99, -19, -10, 3, 5,  10,  33, 100]);
  });

  it('should sort array that has already been sorted', () => {
    const arr = [-99, -19, -10, 3, 5,  10,  33, 100];
    expect(mergeSort(arr)).toEqual([-99, -19, -10, 3, 5,  10,  33, 100]);
  });
});
