import BaseValidator from './BaseValidator';

/**
 * Validates San Marino (MK) national identity number (Codice ISS (Istituto Sicurezza Sociale))
 * @see https://en.wikipedia.org/wiki/National_identification_number#San_Marino
 */
export default class SM_Validator extends BaseValidator {
  countryCode = 'SM';

  isValidRegex(value) {
    return /^\d{5}$/.test(value);
  }

  validate(value) {
    return this.isValidRegex(value);
  }
}
