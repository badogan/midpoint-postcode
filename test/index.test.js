const MidpointPostcode = require("../lib/index");
const midPost = new MidpointPostcode();

test('adds 1 + 2 to equal 3', () => {
    expect(midPost.sum(1, 2)).toBe(3);
  });