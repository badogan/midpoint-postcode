const MidpointPostcode = require("./lib/index");
const myMidpointPostcode = new MidpointPostcode();

// let postcodesArr = ['RG109NY']
let postcodesArr = ['RG109NY','RG10(N','SW40NH']

myMidpointPostcode.bringMidPointPostcode(postcodesArr).then(result=>console.log(result))