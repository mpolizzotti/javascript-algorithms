import { numberOfMatchesWithRecursion, numberOfMatchesWithWhileLoop } from './count.matches.in.tournament.mjs';

describe('numberOfMatchesWithRecursion', () => {
  it('should return number of matches played', () => {
    const n = 7;
    expect(numberOfMatchesWithRecursion(n)).toEqual(6)
  });

  it('should return number of matches played', () => {
    const n = 14;
    expect(numberOfMatchesWithRecursion(n)).toEqual(13)
  });
});

describe('numberOfMatchesWithWhileLoop', () => {
  it('should return number of matches played', () => {
    const n = 7;
    expect(numberOfMatchesWithWhileLoop(n)).toEqual(6)
  });

  it('should return number of matches played', () => {
    const n = 14;
    expect(numberOfMatchesWithWhileLoop(n)).toEqual(13)
  });
});
