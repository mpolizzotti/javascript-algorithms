/**
 * Solution for Find Smallest Letter Greater Than Target
 * see: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 */
const nextGreatestLetter = (letters, target) => {
  let l = 0;
  let r = letters.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const letter = letters[m];

    if (letter <= target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  if (l === letters.length) {
    return letters[0];
  }

  return letters[l];
};

const letters = ['c','f','j'];
const target = 'e';
console.log(nextGreatestLetter(letters, target));

export default nextGreatestLetter;
