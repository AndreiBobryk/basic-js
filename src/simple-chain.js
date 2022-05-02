const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  length: 0,
  value: '',

  getLength() {
    
    return this.length;
  },
  addLink(value) {
      let data = (value !== '') ? `( ${ value } )` : `()`;
      if (this.length === 0 ) {
          this.value = data
      } else {

          this.value +='~~' + data;
      }
      this.length += 1;

      return (this)
    
  },
  removeLink(position) {
    if ((position<1) || (position> this.length) || (typeof position !== 'number') || !Number.isInteger(position) ) {
        this.value = '';
        this.length = 0;
       throw new Error (`You can't remove incorrect link!`);
    }

    this.value = this.value.split('~~').slice(0, position-1).concat(this.value.split('~~').slice(position)).join('~~')
    this.length -= 1;
  
    return this;
     
      
    

  },
  reverseChain() {
    this.value = this.value.split('~~').reverse().join('~~')
    return this;
  },
  finishChain() {
     let res = this.value;
     this.value = '';
     this.length = 0;
     return res;
  }
};

module.exports = {
  chainMaker
};
