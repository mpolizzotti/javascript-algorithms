import findElementIndex from "./binary.search.mjs";

describe('findElementIndex()', () => {
  let arr = [];

  beforeEach(() => {
    arr = [1, 5, 9, 13, 99, 100, 110, 130];
  });

  afterEach(() => {
    arr = [];
  });

  it('should return index 0 for 1', () => {
    expect(findElementIndex(arr, 1)).toEqual(0);
  });

  it('should return index 3 for 13', () => {
    expect(findElementIndex(arr, 13)).toEqual(3);
  });

  it('should return index 6 for 110', () => {
    expect(findElementIndex(arr, 110)).toEqual(6);
  });
});