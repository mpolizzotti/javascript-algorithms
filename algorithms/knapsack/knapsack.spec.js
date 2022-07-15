import knapsack from './knapsack.mjs';

describe('knapsack', () => {
  const items = [
    { name: 'a', value: 3, weight: 3 },
    { name: 'b', value: 6, weight: 8 },
    { name: 'c', value: 10, weight: 3 },
    { name: 'd', value: 2, weight: 2 },
  ]
  const maxCapacity = 8;

  it('should add the largest number of items possible to the knapsack', () => {
    const sack = knapsack(items, maxCapacity, items.length - 1);
    expect(sack.items.length).toEqual(3);
    expect(sack.value).toEqual(15);
    expect(sack.weight).toEqual(8);
  });
});