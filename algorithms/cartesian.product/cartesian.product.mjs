const cartesianProduct = (setA, setB) => {
  const product = [];

  for (let setAElement of setA) {
    if (!Array.isArray(setAElement)) {
      setAElement = [setAElement];
    }

    for (const setBElement of setB) {
      product.push([...setAElement, setBElement]);
    }
  }

  return product;
};

// Time Complexity: O(n*m)
// We are working with a nested loop, however, each
// loop operates on a different array.

// Space Complexity: O(n*m)


const cartesian = (...sets) => {
  let tempProduct = sets[0];
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartesianProduct(tempProduct, sets[i]);
  }
  return tempProduct;
};

// Time Complexity: O(n^x), x is the number of possible inputs.
// We are working with nested loops, however, each
// loop operates on a different array.

// Space Complexity: O(n^x), x is the number of possible inputs.

export { cartesianProduct, cartesian }