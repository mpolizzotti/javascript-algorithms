// See: https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  arr.forEach((nestedArr, index) => {
    let length = (nestedArr.length - 1);
    leftDiagonal = leftDiagonal + nestedArr[index];
    rightDiagonal = rightDiagonal + nestedArr[length - index];
  });

  let difference = leftDiagonal - rightDiagonal;
  return (difference < 0) ? difference * -1 : difference;
}

export default diagonalDifference;