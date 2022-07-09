const getPermutationsWithRepetition = (options, length) => {
  const permutations = [];

  if (length === 1) {
    return options.map((option) => [option]);
  }

  const partialPermutations = getPermutationsWithRepetition(options, length - 1);

  for (const option of options) {
    for (const partial of partialPermutations) {
      permutations.push([option].concat(partial));
    }
  }

  return permutations;
};

const digits = [1, 2, 3, 4];
const resultLength = 4;
console.log(getPermutationsWithRepetition(digits, resultLength).length)

// Time Complexity: O(n^r)

export default getPermutationsWithRepetition;
