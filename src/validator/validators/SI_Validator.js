import UniqueMasterCitizenNumber_Validator from './UniqueMasterCitizenNumber_Validator';

/**
 * Validates Unique Master Citizen Number for Slovenia (SI)
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */
export default class SI_Validator extends UniqueMasterCitizenNumber_Validator {
  countryCode = 'SI';

  validate(value) {
    return super.validate(value, this.countryCode);
  }
}
