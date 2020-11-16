import UniqueMasterCitizenNumber_Validator from './UniqueMasterCitizenNumber_Validator';

/**
 * Validates Unique Master Citizen Number for Montenegro (ME)
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */
export default class ME_Validator extends UniqueMasterCitizenNumber_Validator {
  countryCode = 'ME';

  validate(value) {
    return super.validate(value, this.countryCode);
  }
}
