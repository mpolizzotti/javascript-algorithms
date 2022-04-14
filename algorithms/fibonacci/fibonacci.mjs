/**
 * Method generates the fibonacci scale based
 * upon the value of "n" and returns the last
 * fibonacci value generated.
 */
const fibonacci = (n) => {
  let sequence = [1, 1];

  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }

  return sequence[n];
};

// T = n
// => O(n) => Linear Time Complexity


export default fibonacci;