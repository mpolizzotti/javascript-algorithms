import quickSort from "./quick.sort.mjs";

describe('quickSort()', () => {
  it('should sort the array', () => {
    const arr = [-3, 10, 1, 100, -10, 22, 15];
    const sorted = [-10, -3, 1, 10, 15, 22, 100];
    expect(quickSort(arr)).toEqual(sorted);
  });
});