// See: https://www.hackerrank.com/challenges/icecream-parlor/problem
function iceCreamParlor(m, arr) {
  let indices = [];
  let isFound = false;

  for (let i = 0; i <= (arr.length - 1); i++) {
    const indexTracker = i;

    for (let y = 0; y <= (arr.length - 1); y++) {
      const nestedIndexTracker = y;

      if (indexTracker !== nestedIndexTracker && !isFound) {
        const totalCost = arr[i] + arr[y];
        if (totalCost === m) {
          indices.push((indexTracker + 1));
          indices.push((nestedIndexTracker + 1));
          isFound = true;
        }
      }
    }
  }

  return indices;
}

export default iceCreamParlor;
