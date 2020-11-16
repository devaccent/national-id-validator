export default class BaseValidator {
  countryCode = undefined;
  nationalIdNameLong = undefined;
  nationalIdNameShort = undefined;

  validate(value) {
    throw new Error('validate() function not implemented for this validator');
  }
}
