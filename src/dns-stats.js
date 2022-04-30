const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const arr = domains.slice('');
  const obj = {};
  for (let i=0; i<arr.length; i++) {
    let elSum = ''
   arr[i].split('.').reverse().forEach(el => {
     el = '.' + el;
     elSum += el;
    
 
     if (elSum in obj) {
       obj[elSum] += 1;
     } else {
       obj[elSum] = 1;
     }
     
   });
 
  }
 
 return obj;
 
 
 }

module.exports = {
  getDNSStats
};
