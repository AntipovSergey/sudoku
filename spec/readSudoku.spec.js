const readSudoku = require('../readSudoku.js');

describe('Sudoku field', () => {
  let string;

  beforeEach(() => {
    string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  });
  it('should return correct number for given index', () => {
    expect(readSudoku(string)[0][0]).toEqual('1');
    expect(readSudoku(string)[0][2]).toEqual('2');
  });

  it('should return correct string for given index', () => {
    expect(readSudoku(string)[2]).toEqual(['5', '-', '-', '9', '2', '-', '7', '-', '-']);
    expect(readSudoku(string)[8]).toEqual(['-', '5', '9', '6', '-', '-', '-', '1', '-']);
  });
});
