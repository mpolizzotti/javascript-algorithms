const minimumValue = (n) => {
  let minValue = n[0];
  for (let i = 0; i <= n.length - 1; i++) {
    if (n[i] < minValue) {
      minValue = n[i];
    }
  }

  return minValue;
};

export default minimumValue;