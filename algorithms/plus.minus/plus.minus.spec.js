import { expect } from "@jest/globals";
import plusMinus from "./plus.minus.mjs";

describe('Plus Minus', () => {
  it('should return an object with positive, negative and zero ratios', () => {
    const arr = [-4, 3, -9, 0, 4, 1];
    const expected = {
      positiveRatio: '0.500000',
      negativeRatio: '0.333333',
      zeroRatio: '0.166667'
    }
    const result = plusMinus(arr);
    expect(result).toEqual(expected);
  });
});