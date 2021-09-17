import { optimizedMinimumSwaps, minimumSwaps } from './minimum.swap.mjs';

describe('optimizedMinimumSwaps()', () => {
  it('should return 5 swaps given the [7,1,3,2,4,5,6] array', () => {
    const arr = [7,1,3,2,4,5,6];
    const expected = 5;
    const actual = optimizedMinimumSwaps(arr);
    expect(actual).toEqual(expected);
  });
});

describe('minimumSwaps()', () => {
  it('should return 5 swaps given the [7,1,3,2,4,5,6] array', () => {
    const arr = [7,1,3,2,4,5,6];
    const expected = 5;
    const actual = minimumSwaps(arr);
    expect(actual).toEqual(expected);
  });
});