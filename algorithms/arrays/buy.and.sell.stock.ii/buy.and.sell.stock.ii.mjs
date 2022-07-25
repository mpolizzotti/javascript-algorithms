/**
 * Solution for Buy And Sell Stock II Challenge.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 */
const maxProfit = (prices) => {
  let l = 0;
  let r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[l] < prices[r]) {
      maxProfit = maxProfit + (prices[r] - prices[l]);
    }

    l = r;
    r = r + 1;
  }

  return maxProfit;
};

// Explanation:
// - Create "two pointers" an "l" for "left" and an "r" for "right".
// - Iterate over the "prices" array and increase both "l" and "r" by 1 for each iteration.
// - Calculate the max profit only when price[l] is less then price[r].

// const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));

export default maxProfit;
