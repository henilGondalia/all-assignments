/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const strReversed = str.split("").reverse().join("");
  return strReversed.toLowerCase().replace(/\s+/g, '').replace(/[^\w]/g, '') === str.toLowerCase().replace(/\s+/g, '').replace(/[^\w]/g, '');
}

module.exports = isPalindrome;
