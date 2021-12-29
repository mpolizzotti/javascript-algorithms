const isPrime = (n) => {
  // Check if number is an integer.
  // Any integer % 1 will equal 0.
  if (n % 1 !== 0) {
    return false;
  }

  // If number is less than one then it isn't prime by definition.
  // Improves time complexity to O(1) or constant time.
  if (n <= 1) {
    return false;
  }

  // The numbers 2, and 3 are prime.
  // Improves time complexity to O(1) or constant time.
  if (n <= 3) {
    return true;
  }

  // If the number is divisble by 2 then we can immediately determine that
  // the number is not a prime number.
  // Improves time complexity to O(1) or constant time.
  if (n % 2 === 0) {
    return false;
  }

  // Every number that is NOT prime has a product that consists of two factors (a * b)
  // that are both neither 1 nor the number itself. At least one of those factors
  // (a OR b) must be smaller or equal to the square root of that number.

  // To test if a number is NOT prime, we can take the square root of that number
  // to reduce the number of iterations.
  for (let i = 3; i <= Math.sqrt(n); i++) {
    // How many times does `i` go into `n`? Is there a remainder?
    // When no remainder exists, `n` cannot be prime. We expect
    // all prime numbers to generate remainders.
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Best case: n = 1 OR n = 2 OR n = 3 => O(1)
// Average case: n = random number => O(n)
// Worst case: n = large prime number => O(n)

export default isPrime;