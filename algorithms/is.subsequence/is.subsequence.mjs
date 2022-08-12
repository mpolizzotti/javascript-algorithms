const isSubsequence = (s, t) => {
  // Each string, `s` and `t` gets a pointer.
  let sPointer = 0;
  let tPointer = 0;

  // Iterate over each string as long as our
  // pointers are less then the length of each string.
  while (tPointer < t.length && sPointer < s.length) {
    // Compare the value at sPointer with the value at tPointer.
    // Only move the sPointer forward when a match is found.
    if (s[sPointer] === t[tPointer]) {
      sPointer++;
    }

    // Always move the tPointer forward.
    tPointer++;
  }

  // When a match is found, sPointer should match the length
  // of the `s` string.
  return sPointer === s.length ? true : false;
};

const s = 'abc';
const t = 'ahbgdc';
console.log(isSubsequence(s, t));

export default isSubsequence;
