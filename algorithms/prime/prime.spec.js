import isPrime from "./prime.mjs";

describe('isPrime()', () => {
  it('should return true for 2285477', () => {
    expect(isPrime(2285477)).toEqual(true);
  });

  it('should return true for 9734603', () => {
    expect(isPrime(9734603)).toEqual(true);
  });

  it('should return true for 4718509', () => {
    expect(isPrime(4718509)).toEqual(true);
  });

  it('should return false for 4', () => {
    expect(isPrime(4)).toEqual(false);
  });
});