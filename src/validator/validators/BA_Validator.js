import UniqueMasterCitizenNumber_Validator from './UniqueMasterCitizenNumber_Validator';

/**
 * Validates Unique Master Citizen Number for Bosnia and Herzegovina (BA)
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */
export default class BA_Validator extends UniqueMasterCitizenNumber_Validator {
  countryCode = 'BA';

  validate(value) {
    return super.validate(value, this.countryCode);
  }
}
