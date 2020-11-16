import BaseValidator from './BaseValidator';

/**
 * Validate Romanian (RO) numerical personal code (CNP)
 * Examples:
 * - Valid: 1630615123457, 1800101221144
 * - Invalid: 8800101221144, 1632215123457, 1630615123458
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
 */
export default class RO_Validator extends BaseValidator {
  countryCode = 'RO';
  nationalIdNameLong = 'Cod numeric personal';
  nationalIdNameShort = 'CNP';

  isValidRegex(value) {
    //Romanian ID is 13 characters long and it cannot start with a 0
    return /^[1-9][0-9]{12}$/.test(value);
  }

  extractGender(value) {
    return parseInt(value.charAt(0), 10);
  }

  isValidGender(gender) {
    return gender !== 0;
  }

  extractYearOfBirth(value, gender) {
    let twoDigitsYear = parseInt(value.substr(1, 2), 10);

    // The year of date is determined base on the gender
    const centuries = {
      1: 1900, // Male born between 1900 and 1999
      2: 1900, // Female born between 1900 and 1999
      3: 1800, // Male born between 1800 and 1899
      4: 1800, // Female born between 1800 and 1899
      5: 2000, // Male born after 2000
      6: 2000, // Female born after 2000
      // 7: 0000,//	Male resident
      // 8: 0000,//	Female resident
      // 9: 0000,//	Foreign citizen
    };

    return centuries[gender] + twoDigitsYear;
  }

  isValidDateOfBirth(value, gender) {
    const month = parseInt(value.substr(3, 2), 10),
      day = parseInt(value.substr(5, 2), 10);

    if (day > 31 && month > 12) {
      return false;
    }

    /**
     * We cannot extract full year of birth for 7, 8 and 9
     */
    if ([7, 8, 9].indexOf(gender) !== -1) {
      const fullYear = this.extractYearOfBirth(value, gender);
      //TODO: VERIFY FULL DATE
    }

    return true;
  }

  isValidChecksum(value) {
    const weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
      length = value.length;

    let sum = 0;

    for (let i = 0; i < length - 1; i++) {
      sum += parseInt(value.charAt(i), 10) * weight[i];
    }

    sum = sum % 11;
    if (sum === 10) {
      sum = 1;
    }
    return String(sum) === String(value.charAt(length - 1));
  }

  validate(value) {
    if (this.isValidRegex(value) === false) {
      return false;
    }

    const gender = this.extractGender(value);

    if (this.isValidGender(gender) === false) {
      return false;
    }

    if (this.isValidDateOfBirth(value, gender) === false) {
      return false;
    }

    return this.isValidChecksum(value);
  }
}
