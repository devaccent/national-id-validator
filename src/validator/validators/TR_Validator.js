import BaseValidator from './BaseValidator';

export default class TR_Validator extends BaseValidator {
  countryCode = 'TR';

  isValidRegex(value) {
    //Turkish ID is 11 characters long and it cannot start with a 0
    return /^[1-9][0-9]{10}$/.test(value);
  }

  isSumOfFirstDigitsValid(value) {
    /*
      (sum of first 10 digits) % 10 = the 11th digit
     */
    const eleventhDigit = parseInt(value.substr(10, 1), 10);
    const sumOfFirstTenDigits = value
      .substr(0, 10)
      .split('')
      .reduce((a, b) => a + b, 0);

    return sumOfFirstTenDigits % 10 === eleventhDigit;
  }

  isSumOfOddAndEvenDigitsValid(value) {
    /*
      [(sum of 1,3,5,7,9th digits) * 7 – (sum of 2,4,6,8th digits)] % 10 = the 10th digit.
     */

    const digitNumberTen = parseInt(value.substr(9, 1), 10);
    const firstNineDigitsAsArray = value.substr(0, 9).split('');

    const sumOfOddIndexedNumbers = firstNineDigitsAsArray
      .filter((item, index) => (index + 1) % 2 !== 0)
      .reduce((a, b) => Number(a) + Number(b), 0);

    const sumOfEvenIndexedNumbers = firstNineDigitsAsArray
      .filter((item, index) => (index + 1) % 2 === 0)
      .reduce((a, b) => Number(a) + Number(b), 0);

    return (sumOfOddIndexedNumbers * 7 - sumOfEvenIndexedNumbers) % 10 === digitNumberTen;
  }

  validate(value) {
    if (this.isValidRegex(value) === false) {
      return false;
    }

    if (this.isSumOfFirstDigitsValid(value) === false) {
      return false;
    }

    return this.isSumOfOddAndEvenDigitsValid(value);
  }
}
