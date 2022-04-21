const binaryRecursiveSearch = (sortedArr, element, offset = 0) => {
    // Determine the start and end indexes of the array.
    let startIndex = 0;
    let endIndex = (sortedArr.length - 1);
    const middleIndex = Math.floor((endIndex) / 2);

    // Do we have a match?
    if (sortedArr[middleIndex] === element) {
      console.log(`A match was found. Return index: ${middleIndex}`);
      return offset + middleIndex;
    }

    if (element > sortedArr[middleIndex]) {
      console.log(`${element} is greater then ${sortedArr[middleIndex]}`);
      startIndex = (middleIndex + 1);
      offset = offset + startIndex;
    } else if (element < sortedArr[middleIndex]) {
      console.log(`${element} is less then ${sortedArr[middleIndex]}`); 
      endIndex = (middleIndex - 1);
    } else {
      return -1;
    }

    return binaryRecursiveSearch(sortedArr.slice(startIndex, endIndex + 1), element, offset);
};

export default binaryRecursiveSearch;
