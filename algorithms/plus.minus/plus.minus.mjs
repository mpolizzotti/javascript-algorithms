// See: https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  const length = arr.length;
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((int, index) => {
    if (int < 0) {
      negative = negative + 1;
    } else if (int === 0) {
      zero = zero + 1;
    } else {
      positive = positive + 1;
    }
  });

  const positiveRatio = (positive/length).toPrecision(6);
  const negativeRatio = (negative/length).toPrecision(6);
  const zeroRatio = (zero/length).toPrecision(6);

  return {
    positiveRatio,
    negativeRatio,
    zeroRatio,
  }
}

export default plusMinus;