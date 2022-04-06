const factorial = (number) => {
  let factor = number;
  while(number > 2) {
    factor = factor * (number - 1);
    number--;
  }

  return factor;
};

export default factorial;

console.log(factorial(3));