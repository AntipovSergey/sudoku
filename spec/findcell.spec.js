const findCell = require('../findcell');

const board = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-'],
  ['5', '2', '-', '-', '4', '-', '-', '8'],
  ['1', '9', '-', '1', '9', '-', '-', '7'],
  ['3', '-', '6', '7', '6', '2', '-', '8'],
  ['3', '-', '9', '-', '-', '-', '-', '-'],
  ['6', '1', '-', '5', '-', '-', '-', '7'],
  ['6', '-', '-', '-', '3', '-', '4', '3'],
  ['-', '-', '2', '-', '5', '-', '1', '6'],
  ['-', '-', '3', '-', '8', '9', '-', '-'],
];
describe('')
it('Finds empty cell coordinates', () => {
  expect(findcell(board)).toBe([0, 1]);
});
