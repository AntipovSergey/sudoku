const validate = require('../validate.js');

describe("isValidArray ", function() {
  it("validates empty array", function() {
    expect(validate.isValidArray([null, null, null, null, null, null, null, null, null])).toBe(true);
  });
  it("validates correctly fully filled array", function() {
    expect(validate.isValidArray([3, 1, 7, 8, 9, 5, 2, 4, 6])).toBe(true);
  });
  it("validates correctly partially filled array", function() {
    expect(validate.isValidArray([null, 1, 2, null, 9, 5, null, 4, 6])).toBe(true);
  });
  it("invalidates incorrectly fully filled array", function() {
    expect(validate.isValidArray([3, 1, 7, 7, 9, 5, 2, 4, 6])).toBe(false);
  });
  it("invalidates incorrectly filled array with repeating elements on last positions", function() {
    expect(validate.isValidArray([3, 1, 7, null, 9, 5, null, 4, 4])).toBe(false);
  });
  it("invalidates incorrectly filled array with repeating elements on distant positions", function() {    
    expect(validate.isValidArray([4, null , 7, null, 9, 5, null, null, 4])).toBe(false);
  });
});

