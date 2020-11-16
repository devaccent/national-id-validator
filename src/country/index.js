import {SUPPORTED_COUNTRIES} from './countries';

export function getSupportedCountries() {
  return SUPPORTED_COUNTRIES;
}

export function isCountrySupported(countryCode) {
  return SUPPORTED_COUNTRIES.indexOf(countryCode) !== -1;
}
