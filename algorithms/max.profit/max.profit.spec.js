import { maxProfit } from './max.profit.mjs';

describe('maxProfit()', () => {
  it('should return 5 given [7,1,5,3,6,4]', () => {
    const prices = [7,1,5,3,6,4];
    expect(maxProfit(prices)).toEqual(5);
  });

  it('should return 0 given [2,4,1]', () => {
    const prices = [2,4,1];
    expect(maxProfit(prices)).toEqual(2);
  });
});