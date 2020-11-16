import getValidatorClass from "./ValidatorFactory";

export function validateNationalIdNumber(nationalIdNumber, countryCode){
  const validatorClass = getValidatorClass(countryCode);
  return (new validatorClass()).validate(nationalIdNumber);
}
