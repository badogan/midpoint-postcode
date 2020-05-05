const fetch = require("node-fetch");
const Postcode = require("postcode");

const defaultURL = "https://api.postcodes.io/postcodes/";
const whitelistedFields = "postcode,longitude,latitude";
let specificURL;

class MidpointPostcode {
  sum = (a, b) => a + b;

  validate = postcode => Postcode.isValid(postcode);

  bringMidPointPostcode(postcodesArr) {
    let validatedPostcodes = postcodesArr.filter(postcode =>
      this.validate(postcode)
    );
    let result = [];
    return this.bulkLookupPostcodes(validatedPostcodes)
      .then(res => {
        res.result.map(t => {
          result.push({
            latitude: Number(t.result.latitude),
            longitude: Number(t.result.longitude)
          });
        });
      })
      .then(() => {
        return this.getNearestPostcode(this.findMidPointCoordinates(result));
      });
  }

  findMidPointCoordinates = arr => {
    return {
      latitude:
        arr.reduce((sum, num) => sum + Number(num.latitude), 0) / arr.length,
      longitude:
        arr.reduce((sum, num) => sum + Number(num.longitude), 0) / arr.length
    };
  };

  getNearestPostcode({ latitude, longitude, radius = 100 }) {
    specificURL =
      defaultURL + `?lon=${longitude}&lat=${latitude}&radius=${radius}`;
    return fetch(specificURL)
      .then(res => res.json())
      .then(res =>
        res.status === 200 && res.result && res.result.length !== 0
          ? res.result[0].postcode
          : this.getNearestPostcode({
              latitude,
              longitude,
              radius: radius + 300
            })
      );
  }

  bulkLookupPostcodes(postcodesArray) {
    return fetch(`${defaultURL}?filter=${whitelistedFields}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ postcodes: postcodesArray })
    }).then(res => res.json());
  }

  getPostcodeDetails(postcode) {
    specificURL = defaultURL + postcode;
    return fetch(specificURL).then(res => res.json());
  }
}

module.exports = MidpointPostcode;
