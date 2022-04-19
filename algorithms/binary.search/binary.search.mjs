const findElementIndex = (sortedArr, element) => {
    // Determine the start and end indexes of the array.
    let startIndex = 0;
    let endIndex = (sortedArr.length - 1);

    while (startIndex <= endIndex) {
      // Calculate the middle index.
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
      console.log(`middleIndex: ${middleIndex}`);

      // Do we have a match?
      if (sortedArr[middleIndex] === element) {
        console.log(`A match was found. Return index: ${middleIndex}`);
        return middleIndex;
      }

      if (element > sortedArr[middleIndex]) {
        console.log(`${element} is greater then ${sortedArr[middleIndex]}`);
        startIndex = (middleIndex + 1);
      } else {
        console.log(`${element} is less then ${sortedArr[middleIndex]}`);
        endIndex = (middleIndex - 1);
      }
    }

    return -1;
};

export default findElementIndex;