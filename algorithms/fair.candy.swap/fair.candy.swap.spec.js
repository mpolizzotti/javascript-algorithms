import fairCandySwap from './fair.candy.swap.mjs';

describe('fairCandySwap', () => {
  it(
    `should return integer array where answer[0] is number of candies that Alice must exchange and
    answer[1] is the number of candies that Bob must exchange`, () => {
      const aliceSizes = [1,1];
      const bobSizes = [2,2];
      expect(fairCandySwap(aliceSizes, bobSizes)).toEqual([1,2]);
  });

  it(
    `should return integer array where answer[0] is number of candies that Alice must exchange and
    answer[1] is the number of candies that Bob must exchange`, () => {
      const aliceSizes = [2];
      const bobSizes = [1,3];
      expect(fairCandySwap(aliceSizes, bobSizes)).toEqual([2,3]);
  });
});
