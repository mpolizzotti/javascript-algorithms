// Divide number and future division results by two, until 1 is reached
// and check if the remainder is always 0.
const isPowerOfTwo = (number) => {
  if (number < 1) {
    return false;
  }

  let dividedNumber = number;
  while(dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }

  return true;
}

console.log(isPowerOfTwo(5));

export default isPowerOfTwo;