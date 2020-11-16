# national-id-validator

Validate [national identity numbers](https://en.wikipedia.org/wiki/National_identification_number).

> **Note:** This is a minimal version which has support for a short list of countries, more will be added soon.

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
NL: 'Dutch'
RO: 'Romanian'
RS: 'Serbian'
TR: 'Turkish'
SI: 'Slovenian'
SM: 'San Marino'
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
SE: 'Swedish'
SK: 'Slovak'
ZA: 'South African'
```

## License

[MIT](LICENSE)
