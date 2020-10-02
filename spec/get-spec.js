const get = require('../get');
const testArray = Array.apply(null, {length: 81}).map(Function.call, Number);

describe("getRow", function() {
  it("gets first row correctly ", function() {
    expect(JSON.stringify(get.getRow(testArray, 0))).toEqual(JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8]));
  });
  it("gets last row correctly ", function() {
    expect(JSON.stringify(get.getRow(testArray, 8))).toEqual(JSON.stringify([72, 73, 74, 75, 76, 77, 78, 79, 80]));
  });
});

describe("getColumn", function() {
  it("gets first column correctly ", function() {
    expect(JSON.stringify(get.getColumn(testArray, 0))).toEqual(JSON.stringify([0, 9, 18, 27, 36, 45, 54, 63, 72]));
  });
  it("gets last row correctly ", function() {
    expect(JSON.stringify(get.getColumn(testArray, 8))).toEqual(JSON.stringify([8, 17, 26, 35, 44, 53, 62, 71, 80]));
  });
});

describe("getSquare", function() {
  it("gets first square correctly ", function() {
    expect(JSON.stringify(get.getSquare(testArray, 0))).toEqual(JSON.stringify([0, 1, 2, 9, 10, 11, 18, 19, 20]));
  });
  it("gets 4rd (index = 3) sqaure correctly ", function() {
    expect(JSON.stringify(get.getSquare(testArray, 3))).toEqual(JSON.stringify([27, 28, 29, 36, 37, 38, 45, 46, 47]));
  });
  it("gets last square correctly ", function() {
    expect(JSON.stringify(get.getSquare(testArray, 8))).toEqual(JSON.stringify([60, 61, 62, 69, 70, 71, 78, 79, 80]));
  });
});

