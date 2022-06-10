const findCell = require('../findcell');
const createBoard = require('../simBoard');

let board = createBoard();
console.log(board, 'should be board');

test('new test', () => {
  expect(findCell(board)).toEqual([0, 1]);
});
