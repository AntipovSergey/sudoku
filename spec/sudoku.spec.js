
const fs = require('fs');
// Use functions from sudoku.js file.
const sudoku = require('../sudoku');



async function  fileread() {
  return await (await fs.promises.readFile(
    './sudoku-puzzles.txt',
    'utf-8',
  )).split('\n')
}


 beforeEach(() => {
  board =
    [
      ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
      ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
      ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
      ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
      ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
      ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
      ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
      ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
      ['6', '-', '-', '3', '-', '8', '9', '-', '-']
    ];
    
});



describe("sudoku.solve", function () {
  it("should return the true if we can place number n in col_index else return false", async function () {
    const f = await fileread();
    expect(sudoku.solve(f[0])).toEqual(board);
    //expect(sudoku.solve(f[1])).toEqual(board);
  });
});


describe("sudoku.validCol", function () {
  it("should return the true if we can place number n in col_index else return false", function () {
    expect(sudoku.validCol(board, 0, '1')).toEqual(false);
    expect(sudoku.validCol(board, 0, '3')).toEqual(true);
    expect(sudoku.validCol(board, 8, '2')).toEqual(true);
    expect(sudoku.validCol(board, 7, '3')).toEqual(false);
  });
});

