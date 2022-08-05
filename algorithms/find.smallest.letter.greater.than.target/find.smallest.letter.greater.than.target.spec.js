import nextGreatestLetter from './find.smallest.letter.greater.than.target.mjs';

describe('nextGreatestLetter', () => {
  it('should return the smallest character in the array that is larger than the target', () => {
    const letters = ['c','f','j'];
    const target = 'a';
    expect(nextGreatestLetter(letters, target)).toEqual('c');
  });

  it('should return the smallest character in the array that is larger than the target', () => {
    const letters = ['c','f','j'];
    const target = 'c';
    expect(nextGreatestLetter(letters, target)).toEqual('f');
  });

  it('should return the smallest character in the array that is larger than the target', () => {
    const letters = ['c','f','j'];
    const target = 'd';
    expect(nextGreatestLetter(letters, target)).toEqual('f');
  });
});
