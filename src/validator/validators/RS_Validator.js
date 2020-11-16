import UniqueMasterCitizenNumber_Validator from './UniqueMasterCitizenNumber_Validator';

/**
 * Validates Unique Master Citizen Number for Serbia (RS)
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 */
export default class RS_Validator extends UniqueMasterCitizenNumber_Validator {
  countryCode = 'RS';

  validate(value) {
    return super.validate(value, this.countryCode);
  }
}
