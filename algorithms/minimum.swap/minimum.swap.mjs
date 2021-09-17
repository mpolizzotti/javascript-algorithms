// See: https://www.hackerrank.com/challenges/minimum-swaps-2/problem

function getLowestValue(arr) {
  let lowestValue = arr[0];
  let lowestIndex = 0;
  arr.forEach((val, i) => {
    if (val < lowestValue) {
      lowestValue = val;
      lowestIndex = i
    }
  });

  return lowestValue;
}

function minimumSwaps(arr) {
  let temp;
  let numOfSwaps = 0;

  for (let i = 0; i <= (arr.length - 1); i++) {
    const arrSlice = arr.slice(i);
    const swapIndex = arr.indexOf(getLowestValue(arrSlice));

    if (i !== swapIndex) {
      temp = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = temp;
      numOfSwaps++;
    }
  }

  return numOfSwaps;
}

function optimizedMinimumSwaps(arr) {
  let i = 0;
  let swaps = 0;
  let temp;

  while (i < arr.length) {
    if (arr[i] !== (i + 1)) {
      temp = arr[i];
      arr[i] = arr[temp - 1];
      arr[temp - 1] = temp;
      swaps++;
    } else {
      i++;
    }
  }

  return swaps;
}

const arr = [7,1,3,2,4,5,6]
optimizedMinimumSwaps(arr);

export {
  minimumSwaps,
  optimizedMinimumSwaps
}