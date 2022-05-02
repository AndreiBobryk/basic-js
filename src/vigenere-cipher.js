const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor (state = true) {
      this.state = state
      this.alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(str, key) {
    if (!str || !key ) {
      throw new Error('Incorrect arguments!')
    }

           str = str.toUpperCase()
           key = key.toUpperCase()
         
          let res = [];
          let count = 0;
          for (let i=0; i<str.length; i++) {
              if (this.alf.indexOf(str[i]) !== -1) {
                  let sum = ((this.alf.indexOf(str[i]) + this.alf.indexOf(key[count % key.length])) % 26)
                  res.push( this.alf[sum] )
                  count++

              } else {
                  res.push(str[i])
              }

          }
        

          return this.state ? res.join('') : res.reverse('').join('');

     
   
  }
  decrypt(str, key) {
    if (!str || !key ) {
      throw new Error('Incorrect arguments!')
    }

      str = str.toUpperCase()
      key = key.toUpperCase()
    
     let res = [];
     let count = 0;
     for (let i=0; i<str.length; i++) {
         if (this.alf.indexOf(str[i]) !== -1) {
             let sum = this.alf.indexOf(str[i]) - this.alf.indexOf(key[count % key.length]);
          
             let index = sum < 0 ? 26 + sum : sum;
            
           
             res.push( this.alf[index] )
             count++

         } else {
             res.push(str[i])
         }

     }
   

     return this.state ? res.join('') : res.reverse('').join('');
  

  }
}

module.exports = {
  VigenereCipheringMachine
};
