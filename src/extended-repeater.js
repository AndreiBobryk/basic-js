const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (!('separator' in options)) {
      options.separator = '+';
  } 
  if (!('additionSeparator' in options)) {
      options.additionSeparator = '|';
  } 
  if (typeof str !== 'string') {
      str =  String(str);
  }
  if (('addition' in options) && (typeof options.addition !=='string')) {
      console.log(String(options.addition))
      options.addition = String(options.addition)
  }


  let res = '';
  let template = '';
  if (options.additionRepeatTimes > 0) {
  template += str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
} else {
  if (options.repeatTimes>1 && options.addition) {
      template = str + options.addition;
  } else {
      template =str;
  }
 
}

if (options.repeatTimes > 0) {
    console.log(template + options.addition)
    res = (template + options.separator).repeat(options.repeatTimes -1) + template;
} else {
    res = template + options.addition

}



return res;






  

}


module.exports = {
  repeater
};
