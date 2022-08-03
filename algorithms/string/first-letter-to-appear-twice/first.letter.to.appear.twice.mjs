/**
 * Solution for First Letter to Appear Twice.
 * see: https://leetcode.com/problems/first-letter-to-appear-twice/submissions/
 */
const repeatedCharacter = (s) => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 0);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
      return s[i];
    }
  }

  return -1;
};

// const s = 'abccbaacz';
// console.log(repeatedCharacter(s));

// Time Complexity: O(n) or Linear Time.

export default repeatedCharacter;
