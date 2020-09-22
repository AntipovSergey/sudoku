describe('Tells whether it is possible to put a number in a cell', function () {
  let array;

  beforeEach(function () {
    array = [
      ['-', '9', '6', '-', '4', '-', '-', '-', '1'],
      ['1', '-', '-', '-', '6', '-', '-', '-', '4'],
      ['5', '-', '4', '8', '1', '-', '3', '9', '-'],
      ['-', '-', '7', '9', '5', '-', '-', '4', '3'],
      ['-', '3', '-', '-', '8', '-', '-', '-', '-'],
      ['4', '-', '5', '-', '2', '3', '-', '1', '8'],
      ['-', '1', '-', '6', '3', '-', '-', '5', '9'],
      ['-', '5', '9', '-', '7', '-', '8', '3', '-'],
      ['-', '-', '3', '5', '9', '-', '-', '-', '7'],
    ];
  });

  it('Returns false as the number appears in column, row or box', function () {
    expect(isValid(array, 0, 0, 1)).toBe(false);
    expect(isValid(array, 6, 2, 5)).toBe(false);
    expect(isValid(array, 4, 7, 8)).toBe(false);
  });

  it("Returns true as the number doesn't appear in column, row or box", function () {
    expect(isValid(array, 2, 8, 2)).toBe(true);
    expect(isValid(array, 6, 6, 4)).toBe(true);
  });
});

describe('ArraytoString', function () {
  it('Returns array from string', function () {
    expect(
      arraytoString(
        '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
      )
    ).toEqual([
      ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
      ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
      ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
      ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
      ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
      ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
      ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
      ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
      ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
    ]);
  });
});
