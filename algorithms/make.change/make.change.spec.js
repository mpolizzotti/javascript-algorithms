import { greedyMakeChange, makeChangeBruteForce } from './make.change.mjs';

describe('greedyMakeChange()', () => {
  it('should return the lowest number of coins needed to equal target value', () => {
    const availableCoins = [100, 50, 20, 10, 5, 2, 1];
    const targetValue = 129;
    const result = greedyMakeChange(availableCoins, targetValue);
    expect(result.numberOfCoins).toEqual(5);
  });
});

describe('makeChangeBruteForce()', () => {
  it('should return the lowest number of coins needed to equal target value', () => {
    const availableCoins = [8, 6, 5, 1];
    const targetValue = 63;
    const result = makeChangeBruteForce(availableCoins, targetValue);
    expect(result.numberOfCoins).toEqual(9);
  });
});