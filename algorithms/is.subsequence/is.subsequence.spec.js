import isSubsequence from './is.subsequence.mjs';

describe('isSubsequence', () => {
  it('should return true when s is subsequence of t', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    expect(isSubsequence(s, t)).toEqual(true);
  });

  it('should return false when s is NOT a subsequence of t', () => {
    const s = 'axc';
    const t = 'ahbgdc';
    expect(isSubsequence(s, t)).toEqual(false);
  });
});
