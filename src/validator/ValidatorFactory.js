import RO_Validator from './validators/RO_Validator';
import TR_Validator from './validators/TR_Validator';
import BA_Validator from './validators/BA_Validator';
import MK_Validator from './validators/MK_Validator';
import ME_Validator from './validators/ME_Validator';
import RS_Validator from './validators/RS_Validator';
import SI_Validator from './validators/SI_Validator';
import SM_Validator from './validators/SM_Validator';

export default function getValidatorClass(countryName) {
  switch (countryName) {
    case 'RO':
      return RO_Validator;
    case 'TR':
      return TR_Validator;
    case 'BA':
      return BA_Validator;
    case 'MK':
      return MK_Validator;
    case 'ME':
      return ME_Validator;
    case 'RS':
      return RS_Validator;
    case 'SI':
      return SI_Validator;
    case 'SM':
      return SM_Validator;
    default:
      throw new Error('This country is not supported');
  }
}
