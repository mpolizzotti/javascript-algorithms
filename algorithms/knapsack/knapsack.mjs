const knapsackFn = (items, capacity, itemIndex, memo) => {
  // Return value from cache.
  if (memo[capacity][itemIndex]) {
    return memo[capacity][itemIndex];
  }

  // Exit condition.
  if (capacity === 0 || itemIndex < 0) {
    return {
      items: [],
      value: 0,
      weight: 0
    };
  };

  // Use case: We cannot add the item.
  //
  // When item weight is greater then knapsack capacity,
  // we do not place it in our knapsack. We call ourselves
  // again to evaluate the next item.
  if (capacity < items[itemIndex].weight) {
    return knapsackFn(items, capacity, itemIndex - 1, memo);
  }

  // Use case: We can add the item.
  //
  // Item will be added to the knapsack.
  // We calculate the new weight capacity with the item added to the knapsack.
  const sackWithItem = knapsackFn(items, capacity - items[itemIndex].weight, itemIndex - 1, memo);

  // Use case: We can add the item, but we do not want to because other choices might
  // be better.
  const sackWithoutItem = knapsackFn(items, capacity, itemIndex - 1, memo);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;
  let resultSack;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };

    resultSack = updatedSack;
  } else {
    resultSack = sackWithoutItem;
  }

  memo[capacity][itemIndex] = resultSack;

  return resultSack;
};

const knapsack = (items, capacity, itemIndex) => {
  const memo = Array.from(Array(capacity + 1), () => {
    return Array(items.length).fill(undefined);
  });

  return knapsackFn(items, capacity, itemIndex, memo);
};

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
]
const maxCapacity = 8;
console.log(knapsack(items, maxCapacity, items.length - 1));

export default knapsack;