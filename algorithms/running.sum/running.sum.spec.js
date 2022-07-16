import {
  runningSum,
  runningSumUsingInputArray
} from './running.sum.mjs';

describe('runningSum', () => {
  it('should sum values', () => {
    const numbers = [1, 2, 3, 4];
    const result = runningSum(numbers);
    expect([1, 3, 6, 10]).toEqual(result);
  });
});

describe('runningSumUsingInputArray', () => {
  it('should sum values', () => {
    const numbers = [1, 2, 3, 4];
    const result = runningSumUsingInputArray(numbers);
    expect([1, 3, 6, 10]).toEqual(result);
  });
});
