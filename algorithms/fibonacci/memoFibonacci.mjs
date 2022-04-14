let counter = 0;
const memoFibonacci = (n, memo) => {
  let result;
  counter++;

  // Check to see if we have stored value.
  if (memo[n]) {
    return memo[n];
  }

  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = memoFibonacci(n - 1, memo) + memoFibonacci(n - 2, memo);
  }

  // Cache result.
  memo[n] = result;
  return result;
};

memoFibonacci(5, {});
console.log(counter);
counter = 0;

memoFibonacci(6, {});
console.log(counter);
counter = 0;

memoFibonacci(10, {});
console.log(counter);
counter = 0;

memoFibonacci(20, {});
console.log(counter);
counter = 0;

memoFibonacci(30, {});
console.log(counter);
counter = 0;

export default memoFibonacci;