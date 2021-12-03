const {prettyBoard} = require('../sudoku.js')

let board = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

describe('prettyBoard must return', () => {
  it('should return', () => {
    expect(prettyBoard(board)[0]).toEqual(['1',  '.', '5', '8', '.', '2', '.', '.', '.']);
  });
  it('should return', () => {
    expect(prettyBoard(board)[1]).toStrictEqual( ['.', '9',  '.', '.', '7',  '6', '4',  '.', '5']);
  });
})
