function isPalindromeSolutionOne(str) {
  const reverseStr = str.split('').reverse().join('');
  return (str === reverseStr) ? true : false;
}

function isPalindromeSolutionTwo(str) {
  const newArr = [];
  for (let i = (str.length - 1); i >= 0; i--) {
    newArr.push(str[i]);
  }
  return (str == newArr.join('')) ? true : false;
}

function isPalindromeSolutionThree(str) {
  // When passed a single character.
  if (str.length === 1) {
    return true;
  }

  // The first and last characters match and we only have two characters.
  if (str[0] === str[str.length - 1] && str.length === 2) {
    return true;
  }

  // The first and last characters do not match.
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Create a new string without the first and last characters.
  const newStr = str.slice(1, str.length - 1);
  return isPalindromeSolutionThree(newStr);
}

function isPalindromeSolutionFour(str) {
  let l = 0;
  let r = str.length - 1;
  let isPalindrome = true;

  while (l < r) {
    if (str[l] !== str[r]) {
      isPalindrome = false;
      break;
    }

    l = l + 1;
    r = r - 1;
  }

  console.log(`l : ${l} | r: ${r} | str.length : ${str.length}`);

  return isPalindrome;
}

const str = 'abba';
console.log(isPalindromeSolutionFour(str));