import BaseValidator from './BaseValidator';

/**
 * Validates Unique Master Citizen Number which is used in the following countries
 * - Bosnia and Herzegovina (BA)
 * - Macedonia (MK)
 * - Montenegro (ME)
 * - Serbia (RS)
 * - Slovenia (SI)
 *
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */
export default class UniqueMasterCitizenNumber_Validator extends BaseValidator {
  extractRegion(value) {
    return parseInt(value.substr(7, 2), 10);
  }

  isValidRegex(value) {
    return /^\d{13}$/.test(value);
  }

  isValidRegion(countryCode) {
    const region = this.extractRegion(value);

    // Validate political region
    // 10-19: Bosnia and Herzegovina
    // 20-29: Montenegro
    // 30-39: Croatia (not used anymore)
    // 41-49: Macedonia
    // 50-59: Slovenia (only 50 is used)
    // 70-79: Central Serbia
    // 80-89: Serbian province of Vojvodina
    // 90-99: Kosovo
    switch (countryCode.toUpperCase()) {
      case 'BA':
        return 10 <= region && region <= 19;
      case 'ME':
        return 20 <= region && region <= 29;
      case 'MK':
        return 41 <= region && region <= 49;
      case 'SI':
        return 50 <= region && region <= 59;
      case 'RS':
        return 70 <= region && region <= 99;
      default:
        return true;
    }
  }

  isValidDateOfBirth(value) {
    const day = parseInt(value.substr(0, 2), 10),
      month = parseInt(value.substr(2, 2), 10);

    if (day > 31 || month > 12) {
      return false;
    }
  }

  isValidChecksum(value) {
    const checkDigit = parseInt(value.substr(12, 1), 10);
    let sum = 0;

    for (let i = 0; i < 6; i++) {
      sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    }

    sum = 11 - (sum % 11);
    if (sum === 10 || sum === 11) {
      sum = 0;
    }

    return sum === checkDigit;
  }

  validate(value, countryCode) {
    if (this.isValidRegex(value) === false) {
      return false;
    }

    if (this.isValidDateOfBirth(value) === false) {
      return false;
    }

    if (this.isValidChecksum(value) === false) {
      return false;
    }

    return this.isValidRegion(value);
  }
}
