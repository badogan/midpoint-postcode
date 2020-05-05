# midpoint-postcode-uk

Simple tool providing midpoint postcode for an array of postcodes.
Endpoints and methods provided by https://postcodes.io/

[![badogan](https://circleci.com/gh/badogan/midpoint-postcode.svg?style=shield)](https://app.circleci.com/pipelines/github/badogan/midpoint-postcode)

## Installation

```bash
$ npm install midpoint-postcode-uk
```

## Usage

```js
const MidpointPostcode = require("midpoint-postcode-uk");
const myMidpointPostcode = new MidpointPostcode();

let postcodesArr = ["RG109NY", "SW40NH"];
myMidpointPostcode
  .bringMidPointPostcode(postcodesArr)
  .then(postcode => console.log(postcode));
```

### Postcode validation method

Method validates a postcode.

'''js
console.log(myMidpointPostcode.validate('RG109NY')) //true
console.log(myMidpointPostcode.validate('XXYYZZT')) //false
'''

### Postcode validation method

Method returns midpoint postcode for the input postcode(s) array.
Method ignores invalid postcodes and returns the midpoint postcode for the valid postcodes only. Postcode validation recommended prior to calling the function. Please see validation method above.

'''js
let postcodesArr = ['RG109NY','SW40NH']
myMidpointPostcode.bringMidPointPostcode(postcodesArr).then(postcode=>
console.log(postcode)) //SL30BQ
'''

## Testing

First, install development dependencies:

```bash
$ npm install midpoint-postcode-uk
```

Then, run the tests:

```bash
$ npm test
```

## Support

Please open an issue on this repo

## Authors

Basri Dogan https://basridogan.com/

## License

MIT licensed - see [LICENSE](LICENSE) file
