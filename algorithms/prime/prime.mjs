const isPrime = (n) => {
  let isPrime = true;
  let i = 2;

  while (i < n) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }

  return isPrime;
}

// Best case: n = 1 OR n = 2 => O(1)
// Average case: n = random number => O(n)
// Worst case: n = large prime number => O(n)

export default isPrime;