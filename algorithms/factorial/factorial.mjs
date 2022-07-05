const factorial = (number) => {
  let factor = number;
  while(number > 2) {
    factor = factor * (number - 1);
    number--;
  }

  return factor;
};

// Space Complexity: O(1) Constant Space Complexity
// Reason: No new "permanent" values are created during the iteration.


// In every function call we have constant time O(1).
// However, the function may execute n times.
// O(n) or linear time.
const recursiveFactor = (number) => {
  if (number === 1) { // runs 1
    return 1; // runs 1
  }

  return number * recursiveFactor(number - 1) // runs 1
};

// Space Complexity: O(n) Linear Space Complexity
// Reason: A new value is created for every nested function call (the parameter received)

export { factorial, recursiveFactor };

console.log(recursiveFactor(3));