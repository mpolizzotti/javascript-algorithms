const getPermutationsWithoutRepetition = (options) => {
  const permutations = [];

  if (options.length === 1) {
    return [options];
  }

  const partialPermutations = getPermutationsWithoutRepetition(options.slice(1));

  const firstOption = options[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationBefore = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      permutations.push(permutationBefore.concat([firstOption], permutationAfter));
    }
  }

  return permutations;
};

// Time Complexity: O(n!)
// For 4 items in our list, our output array has 24 items.
// For 5 items in our list, our output array has 120 items.
// Factorial time complexity. Grows very fast.
export default getPermutationsWithoutRepetition;
