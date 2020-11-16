import BaseValidator from './BaseValidator';

/**
 * Validates Dutch national identification number (BSN)
 * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
 */
export default class NL_Validator extends BaseValidator {
  countryCode = 'NL';

  padValue(value) {
    while (value.length < 9) {
      value = '0' + value;
    }

    return value;
  }

  cleanValue(value) {
    return value.replace(/\./g, '');
  }

  isValidRegex(value) {
    return /^[0-9]{4}[.]?[0-9]{2}[.]?[0-9]{3}$/.test(value);
  }

  isNonZeroNumericalValue(value) {
    return parseInt(value, 10) !== 0;
  }

  isValidChecksum(value) {
    const length = value.length;
    let sum = 0;

    for (let i = 0; i < length - 1; i++) {
      sum += (9 - i) * parseInt(value.charAt(i), 10);
    }

    sum = sum % 11;
    if (sum === 10) {
      sum = 0;
    }

    return sum + '' === value.charAt(length - 1);
  }

  validate(value) {
    const paddedValue = this.padValue(value);
    const cleanValue = this.cleanValue(paddedValue);

    if (this.isValidRegex(paddedValue) === false) {
      return false;
    }

    if (this.isNonZeroNumericalValue(cleanValue) === false) {
      return false;
    }

    return this.isValidChecksum(cleanValue);
  }
}
