const greedyMakeChange = (coins, amount) => {
  let remainingAmount = amount;
  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };

  for (const coin of coins) {
   const count = Math.floor(remainingAmount / coin);
   calculatedChange.selectedCoins[coin] = count;
   calculatedChange.numberOfCoins += count;
   remainingAmount = remainingAmount - (coin * count);
  }

  return calculatedChange;
};

const makeChangeBruteForce = (coins, amount) => {
  const coinsCopy = [...coins];
  const results = [];
  for (let i = 0; i < coinsCopy.length; i++) {
    results.push(greedyMakeChange(coinsCopy.slice(i), amount));
  }

  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  results.forEach((obj) => {
    if (obj.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = obj.numberOfCoins;
      finalResult = obj;
    }
  });

  return finalResult;
};

export { greedyMakeChange, makeChangeBruteForce };
