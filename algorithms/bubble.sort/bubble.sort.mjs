const bubbleSort = (arr) => {
  let sorted = [...arr];
  for (let outer = 0; outer <= sorted.length - 1; outer++) {
    let outerEl = sorted[outer]
    console.log(`OUTER ELEMENT: ${sorted[outer]}`);

    for (let inner = outer + 1; inner <= sorted.length - 1; inner ++) {
      let innerEl = sorted[inner]
      console.log(`  INNER ELEMENT: ${sorted[inner]}`);

      // [10, 5] => [5, 10]
      if (outerEl > innerEl ) {
        // Swap positions.
        sorted[outer] = innerEl; // 5
        sorted[inner] = outerEl; // 10

        // Update references.
        outerEl = sorted[outer];
        innerEl = sorted[inner];
      }
    }
  }

  return sorted;
};

export default bubbleSort;