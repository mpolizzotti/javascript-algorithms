import maxProfit from './buy.and.sell.stock.mjs';

describe('maxProfit', () => {
  it('should return no profit', () => {
    const prices = [7,6,4,3,1];
    expect(maxProfit(prices)).toEqual(0);
  });

  it('should return a profit of 5', () => {
    const prices = [7,1,5,3,6,4];
    expect(maxProfit(prices)).toEqual(5);
  });
});
