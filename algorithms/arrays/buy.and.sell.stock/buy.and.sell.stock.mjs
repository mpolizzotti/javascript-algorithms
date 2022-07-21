/**
 * Solution for Buy And Sell Stock Challenge.
 * Category: "Two Pointers"
 * see: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
const maxProfit = (prices) => {
  let left = 0; // left = buy
  let right = 1; // right = sell
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }

    right += 1;
  }

  return maxProfit;
};

// Explanation:
// Uses "two pointers" to track when to buy and sell stock.
// Creates a sliding window.

// Time Complexity: O(n) or Linear Time.

// const prices = [7,6,4,3,1];
// console.log(maxProfit(prices));

export default maxProfit;
