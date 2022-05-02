const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error( `'arr' parameter must be an instance of the Array!`)
     
  }
  const state = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
 let res = [];
  for (let i=0; i<arr.length; i++) {
      if (!state.includes(arr[i]) ) {
        res.push(arr[i])
      } 
      if (arr[i] === '--discard-next') {
          i++;
          if (i<arr.length) {
              res.push('')
          }
         
      
      }
      if (arr[i] === '--discard-prev') {

         
          res[res.length - 1] = '';
      
      }
      if (arr[i] === '--double-next') {
          i++;
          if (i<arr.length) {
          res.push(arr[i]);
          res.push(arr[i]);
      }
      
      }
      if (arr[i] === '--double-prev') {
         if (res.length) {
          res.push( res[res.length - 1]);
      }
      
      }
  }

  return (res.filter(el=> el !==''))


}

module.exports = {
  transform
};
