// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
 export function twoSum(array1, array2) {
    let num1 = array1.join('');
    let num2 = array2.join('');
    return Number(num1) + Number(num2);
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean}  whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    value = String(value);
    let newWord = '';
    let newWord2 = '';
    if (value.length % 2 != 0){
    for (let i = 0; i < value.length/2 - 1; i++){
        newWord += value[i];
    }
    for (let i = (value.length - 1); i > value.length/2; i--){
        newWord2 += value[i];
    }
    } else {
      for (let i = 0; i < value.length/2; i++){
        newWord += value[i];
    }
    for (let i = value.length-1; i > value.length/2-1; i--){
        newWord2 += value[i];
    }
    }
    console.log(newWord)
    console.log(newWord2)
    return newWord == newWord2;
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
  export function errorMessage(input) {
      if (input == '' || input == null || input == undefined){
        return 'Required field';
      } else if (Number(input) / 1 == Number(input) && Number(input) != 0){
        console.log(input);
        console.log(Number(input));
        return '';
      } else {
        return 'Must be a number besides 0';
      }
  }
  
  
  