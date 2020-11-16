# national-id-validator

Validate [national identity numbers](https://en.wikipedia.org/wiki/National_identification_number).

## Installation

Install the package via `npm`:
```
npm install devaccent/national-id-validator
```

or

```
yarn add devaccent/national-id-validator
```

## Usage

```js
import { validateNationalIdNumber } from 'devaccent/national-id-validator';

const nationalId = '1734312345478';

const isValidIdForRomania = validateNationalIdNumber(nationalId, 'RO');
const isValidIdForTurkey = validateNationalIdNumber(nationalId, 'TR');
const isValidIdForSerbia = validateNationalIdNumber(nationalId, 'RS');
```

## Type of national IDs supported

```
BA: 'Bosnia and Herzegovina'
ME: 'Montenegro'
MK: 'Macedonian'
RO: 'Romanian'
RS: 'Serbian'
TR: 'Turkish'
SI: 'Slovenian'
```

## Coming soon
```
BG: 'Bulgarian'
BR: 'Brazilian'
CH: 'Swiss'
CL: 'Chilean'
CZ: 'Czech'
DK: 'Danish'
EE: 'Estonian'
ES: 'Spanish'
FI: 'Finnish'
HR: 'Croatian'
IE: 'Irish'
IS: 'Iceland'
LT: 'Lithuanian'
LV: 'Latvian'
NL: 'Dutch'
SE: 'Swedish'
SK: 'Slovak'
SM: 'San Marino'
ZA: 'South African'
```

## License

[MIT](LICENSE)
