// const sudoku = require('../sudoku.js');

describe('checkSquare()', () => {
  it('check if the value in the 3x3 square', () => {
    const board = [
      [1, 0, 5, 8, 0, 2, 0, 0, 0],
      [0, 9, 0, 0, 7, 6, 4, 0, 5],
      [0, 0, 4, 0, 0, 8, 1, 9, 0],
      [1, 9, 0, 0, 7, 3, 0, 6, 7],
      [6, 2, 0, 8, 3, 0, 9, 0, 0],
      [0, 0, 0, 6, 1, 0, 5, 0, 0],
      [0, 0, 7, 6, 0, 0, 0, 3, 0],
      [4, 3, 0, 0, 2, 0, 5, 0, 1],
      [6, 0, 0, 3, 0, 8, 9, 0, 0],
    ];
    const row = 7;
    const column = 5;
    const value = 4;
    expect(checkSquare(board, row, column, value)).toBeTruthy();
  });
});

describe('checkSquare()', () => {
  it('check if the value in the 3x3 square', () => {
    const board = [
      [1, 0, 5, 8, 0, 2, 0, 0, 0],
      [0, 9, 0, 0, 7, 6, 4, 0, 5],
      [0, 0, 4, 0, 0, 8, 1, 9, 0],
      [1, 9, 0, 0, 7, 3, 0, 6, 7],
      [6, 2, 0, 8, 3, 0, 9, 0, 0],
      [0, 0, 0, 6, 1, 0, 5, 0, 0],
      [0, 0, 7, 6, 0, 0, 0, 3, 0],
      [4, 3, 0, 0, 2, 0, 5, 0, 1],
      [6, 0, 0, 3, 0, 8, 9, 0, 0],
    ];
    const row = 1;
    const column = 2;
    const value = 9;
    expect(checkSquare(board, row, column, value)).toBeFalsy();
  });
});
