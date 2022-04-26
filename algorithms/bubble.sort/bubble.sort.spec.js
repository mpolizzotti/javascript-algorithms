import bubbleSort from "./bubble.sort.mjs";

describe('bubbleSort()', () => {
  it('should sort the array', () => {
    const arr = [5, 10, -3, -10];
    const sorted = [-10, -3, 5, 10];
    expect(bubbleSort(arr)).toEqual(sorted);
  });
});