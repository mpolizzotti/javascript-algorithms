import { search, searchBruteForce } from './search.in.rotated.sorted.array.mjs';

describe('search', () => {
  it('should return the index of the target', () => {
    const numbers = [4,5,6,7,0,1,2];
    const target = 0;
    expect(search(numbers, target)).toEqual(4);
  });

  it('should return -1 wne target is not found', () => {
    const numbers = [4,5,6,7,0,1,2];
    const target = 3;
    expect(search(numbers, target)).toEqual(-1);
  });
});

describe('searchBruteForce', () => {
  it('should return the index of the target', () => {
    const numbers = [4,5,6,7,0,1,2];
    const target = 0;
    expect(searchBruteForce(numbers, target)).toEqual(4);
  });

  it('should return -1 wne target is not found', () => {
    const numbers = [4,5,6,7,0,1,2];
    const target = 3;
    expect(searchBruteForce(numbers, target)).toEqual(-1);
  });
});
