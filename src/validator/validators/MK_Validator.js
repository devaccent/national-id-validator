import UniqueMasterCitizenNumber_Validator from './UniqueMasterCitizenNumber_Validator';

/**
 * Validates Unique Master Citizen Number for Macedonia (MK)
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */
export default class MK_Validator extends UniqueMasterCitizenNumber_Validator {
  countryCode = 'MK';

  validate(value) {
    return super.validate(value, this.countryCode);
  }
}
