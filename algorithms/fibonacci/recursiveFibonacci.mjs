
let counter = 0;
const recursiveFibonacci = (n) => { // [1, 1, 2, 3, 5, 8]
  counter++;
  // Base use case.
  if (n === 0 || n === 1) {
    return 1;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// recursiveFibonacci(5) -> 15 executions
// recursiveFibonacci(6) -> 25 executions
// recursiveFibonacci(7) -> 50 executions
// The number of executions grows exponentially.
// Quickly grows to a number of executions that your browser cannot handle.
// T = O(2^n) Exponential Time Complexity

// recursiveFibonacci(5);
// console.log(`counter: ${counter}`);
// 15
// quadratic (5*5 = 25)
// cubic (5*5*5 = 125)
// counter = 0;

// recursiveFibonacci(10);
// console.log(`counter: ${counter}`);
// 177
// quadratic (10*10 = 100)
// cubic (10*10*10 = 1000)
// counter = 0;

// recursiveFibonacci(20);
// console.log(`counter: ${counter}`);
// 21891
// quadratic (20*20 = 400)
// cubic (20*20*20 = 800)
// counter = 0;

// The counter value grows at a faster rate then quadratic or cubic time.

export default recursiveFibonacci;