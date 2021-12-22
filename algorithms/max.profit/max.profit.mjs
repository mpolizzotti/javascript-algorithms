const maxProfitBruteForceSolution = (prices) => {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const buyPrice = prices[i];

    for (let y = i + 1; y <= prices.length - 1; y++) {
      const sellPrice = prices[y];
      const profitMargin = sellPrice - buyPrice;
      const newProfit = (profitMargin > 0) ? profitMargin : 0;
      profit = (newProfit > profit) ? newProfit : profit;
    }
  }

  return profit;
};

const maxProfit = (prices) => {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if ((prices[i] - minPrice) > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

export { maxProfitBruteForceSolution, maxProfit };