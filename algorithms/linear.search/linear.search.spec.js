import { findElementIndex, findElementInObject } from "./linear.search.mjs";

describe('findElementIndex()', () => {
  let arr = [];

  beforeEach(() => {
    arr = [5, 9, 3, 2, 4, 10, 23];
  });

  afterEach(() => {
    arr = [];
  });

  it('should return an index of 0 when searching for 5', () => {
    expect(findElementIndex(arr, 5)).toEqual(0);
  });

  it('should return an index of 2 when searching for 3', () => {
    expect(findElementIndex(arr, 3)).toEqual(2);
  });

  it('should return an index of 1 when searching for 3', () => {
    expect(findElementIndex(arr, 9)).toEqual(1);
  });
});


describe('findElementInObject()', () => {
  let arrOfObjects = [];

  beforeEach(() => {
    arrOfObjects = [{ name: 'Max', age: 31 }, { name: 'Manu', age: 21 }, { name: 'Bob', age: 21 }];
  });

  afterEach(() => {
    arrOfObjects = [];
  });

  it('should return an index of 2 when searching for bob', () => {
    const result = findElementInObject(arrOfObjects, (element) => element.name.toLowerCase() === 'bob')
    expect(result).toEqual(2);
  });

  it('should return an index of 0 when searching for max', () => {
    const result = findElementInObject(arrOfObjects, (element) => element.name.toLowerCase() === 'max')
    expect(result).toEqual(0);
  });

  it('should return an index of 1 when searching for manu', () => {
    const result = findElementInObject(arrOfObjects, (element) => element.name.toLowerCase() === 'manu')
    expect(result).toEqual(1);
  });
});
