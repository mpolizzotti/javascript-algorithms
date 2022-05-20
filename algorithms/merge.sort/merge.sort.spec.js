import mergeSort from './merge.sort.mjs'

describe('mergeSort', () => {
  it('should immediately return when array has a single element', () => {
    const arr = [10];
    const sorted = [10];
    expect(mergeSort(arr)).toEqual(sorted);
  });

  it('should sort array when array has two elements', () => {
    const arr = [10, 5];
    const sorted = [5, 10];
    console.log(mergeSort(arr));
    expect(mergeSort(arr)).toEqual(sorted);
  });

  it('should sort the array', () => {
    const arr = [-10, 33, 5, 10, 3];
    const sorted = [-10, 3, 5, 10, 33];
    expect(mergeSort(arr)).toEqual(sorted);
  });


  it('should sort the array', () => {
    const arr = [-10, 33, 5, 10, 3, -19, -99, 100];
    const sorted = [-99, -19, -10, 3, 5,  10,  33, 100];
    expect(mergeSort(arr)).toEqual(sorted);
  });
});
