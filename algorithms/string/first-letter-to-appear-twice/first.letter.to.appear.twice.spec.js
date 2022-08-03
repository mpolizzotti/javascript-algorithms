import repeatedCharacter from './first.letter.to.appear.twice.mjs';

describe('repeatedCharacter', () => {
  it('should return first repeated character', () => {
    const s = 'abccbaacz';
    expect(repeatedCharacter(s)).toEqual('c');
  });

  it('should return first repeated character', () => {
    const s = 'abcdd';
    expect(repeatedCharacter(s)).toEqual('d');
  });
});
