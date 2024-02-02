const getPossibleDigitInRow = require('../get-possible-digit-in-row');
const getPossibleDigitInColumn = require('../get-possible-digit-in-column');

describe('Находит значения, которых не хватает', () => {
  let field;

  beforeEach(() => {
    field = [['1', '-', '2', '-', '7', '-', '-', '4', '6'], ['-', '9', '-', '1', '6', '-', '-', '3', '-'], ['5', '-', '-', '9', '2', '-', '7', '-', '-'], ['8', '-', '4', '-', '-', '-', '6', '-', '3'], ['-', '7', '-', '-', '8', '6', '-', '2', '-'], ['2', '6', '-', '7', '3', '1', '-', '-', '8'], ['-', '4', '8', '3', '-', '-', '-', '5', '9'], ['-', '-', '1', '-', '9', '5', '3', '-', '-'], ['-', '5', '9', '6', '-', '-', '-', '1', '-']];
  });
  it('в первой строке', () => {
    expect(getPossibleDigitInColumn(field, 0)).toEqual(['3', '5', '8', '9']);
  });
  it('во второй строке', () => {
    expect(getPossibleDigitInColumn(field, 1)).toEqual(['2', '4', '5', '7', '8']);
  });
  it('в третей строке', () => {
    expect(getPossibleDigitInColumn(field, 2)).toEqual(['1', '3', '4', '6', '8']);
  });
  it('в первом столбце', () => {
    expect(getPossibleDigitInRow(field, 0)).toEqual(['3', '4', '6', '7', '9']);
  });
  it('во втором столбце', () => {
    expect(getPossibleDigitInRow(field, 1)).toEqual(['1', '2', '3', '8']);
  });
  it('в третьем столбце', () => {
    expect(getPossibleDigitInRow(field, 2)).toEqual(['3', '5', '6', '7']);
  });
});
