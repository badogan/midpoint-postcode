const MidpointPostcode = require("../lib/index");
const midPost = new MidpointPostcode();

test("adds 1 + 2 to equal 3", () => {
  expect(midPost.sum(1, 2)).toBe(3);
});

test("testing if postcode validation works - input is correct postcode", () => {
  expect(midPost.validate("RG109NY")).toBe(true);
});

test("testing if postcode validation works - input is INcorrect postcode", () => {
  expect(midPost.validate("RG1009NY")).toBe(false);
});

test('testing if it returns the expected midpoint postcode for a given array of postcodes - including an invalid postcode ', async () => {
  let postcodesArr = ['RG109NY','RG10(N','SW40NH']
  await expect(midPost.bringMidPointPostcode(postcodesArr)).resolves.toBe('SL3 0BQ')
});

test('testing if it returns the expected midpoint postcode for a given array of postcodes - all postcodes valid', async () => {
  let postcodesArr = ['RG109NY','SW40NH']
  await expect(midPost.bringMidPointPostcode(postcodesArr)).resolves.toBe('SL3 0BQ')
});