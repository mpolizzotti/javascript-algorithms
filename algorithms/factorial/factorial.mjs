const factorial = (number) => {
  let factor = number;
  while(number > 2) {
    factor = factor * (number - 1);
    number--;
  }

  return factor;
};

// In every function call we have constant time O(1).
// However, the function may execute n times.
// O(n) or linear time.
const recursiveFactor = (number) => {
  if (number === 1) { // runs 1
    return 1; // runs 1
  }

  return number * recursiveFactor(number - 1) // runs 1
};

export { factorial, recursiveFactor };

console.log(recursiveFactor(3));