const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count =0;
  let s2Copy = s2;
  for (let i=0; i<s1.length; i++) {
    let currentIndex = s2Copy.indexOf(s1[i]);
    if (currentIndex !== -1) {
      s2Copy = s2Copy.slice(0, currentIndex) +s2Copy.slice(currentIndex+1)
      count++;

    }

  }
  return count;

  
}

module.exports = {
  getCommonCharacterCount
};
