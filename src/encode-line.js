const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function encodeLine(str) {
  let res = '';
  for (let i=0; i<str.length;) {
      if (str[i] === str[i+1]) {
         let count = 2;
         i = i+1;
         while (str[i] === str[i+1]) {
           count++;
           i++;
         }
         res +=count+str[i]
         i++;
      } else {
         res +=str[i]
         i++;
      }
  }


  return res;


}



module.exports = {
  encodeLine
};
