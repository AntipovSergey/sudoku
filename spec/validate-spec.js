const validate = require('../validate.js');

describe("isValidArray", function() {
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

describe("isValidTable", function() {
  const correctlySolvedTable = [5,3,4,6,7,8,9,1,2,6,7,2,1,9,5,3,4,8,1,9,8,3,4,2,5,6,7,8,5,9,7,6,1,4,2,3,4,2,6,8,5,3,7,9,1,7,1,3,9,2,4,8,5,6,9,6,1,5,3,7,2,8,4,2,8,7,4,1,9,6,3,5,3,4,5,2,8,6,1,7,9]

  it("validates empty table", function() {
    expect(validate.isValidTable(new Array(81).fill(null))).toBe(true);
  });

  it("validates correctly solved table", function() {
    expect(validate.isValidTable(correctlySolvedTable)).toBe(true);
  });
})

describe("tableIsFinished", function() {
  it("returns true if not finished", function() {
    expect(validate.tableIsFinished([1, 3, null])).toBe(false);
  });
  it("returns false if finished", function() {
    expect(validate.tableIsFinished([1, 3, 5, 8, 2, 4, 1, 2])).toBe(true);
  });
})
