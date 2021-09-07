// See: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  let str = '';
  let spacer = ' ';
  let result = {};

  for (let a = 1; a <= n; a++) {
    const b = a;
    const numOfSpaces = (n - a);

    // Build staircase.
    for (let c = 1; c <= b; c++) {
      str = str + '#';
    }

    // Justify-right.
    for (let d = 1; d <= numOfSpaces; d++) {
      str = `${spacer}${str}`;
    }

    console.log(str);
    result[a] = str;
    str = '';
  }

  return result;
}

export default staircase;
