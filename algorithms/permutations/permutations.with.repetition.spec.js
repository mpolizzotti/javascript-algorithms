import getPermutationsWithRepetition from './permutations.with.repetition.mjs';

describe('getPermutationsWithRepetition()', () => {
  it('should return permutations with repetition', () => {
    const digits = [1, 2];
    const resultLength = 3;
    const expected = [
      [ 1, 1, 1 ],
      [ 1, 1, 2 ],
      [ 1, 2, 1 ],
      [ 1, 2, 2 ],
      [ 2, 1, 1 ],
      [ 2, 1, 2 ],
      [ 2, 2, 1 ],
      [ 2, 2, 2 ],
    ];
    expect(getPermutationsWithRepetition(digits, resultLength)).toEqual(expected);
  });
});