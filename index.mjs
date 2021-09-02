import diagonalDifference from './algorithms/diagonal.difference/diagonal.difference.mjs';
import plusMinus from './algorithms/plus.minus/plus.minus.mjs';

console.log(' ');
// Diagonal Difference.
// See: https://www.hackerrank.com/challenges/diagonal-difference/problem
console.log('Diagonal Difference');
console.log('-------------------');
const diagonalDifferenceArr = [[11,2,4],[4,5,6],[10,8,-12]];
console.log(diagonalDifference(diagonalDifferenceArr));
console.log(' ');

// Plus Minus.
// See: https://www.hackerrank.com/challenges/plus-minus/problem
console.log('Plus Minus');
console.log('-------------------');
const plusMinusArr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(plusMinusArr));
console.log(' ');

