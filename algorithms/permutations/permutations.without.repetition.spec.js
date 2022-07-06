import getPermutationsWithoutRepetition from './permutations.without.repetition.mjs'

describe('getPermutationsWithoutRepetition()', () => {
  it('should return permutations without repetition', () => {
    const todoListItems = [
      'Buy groceries',
      'Order food',
    ];

    const expectedArray = [
      [ 'Buy groceries', 'Order food' ],
      [ 'Order food', 'Buy groceries' ]
    ];

    const result = getPermutationsWithoutRepetition(todoListItems);
    expect(result).toEqual(expectedArray);
  });
});