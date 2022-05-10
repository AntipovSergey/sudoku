const sudoku = require("../sudoku.js");

describe("Test for checkSquare, checkRow, checkColum", () => {
  let board;
  let boardString;
  let pos;

  beforeEach(() => {
    boardString = '6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--';
    board = sudoku.createArrays(boardString);
    pos = [0, 1];
  });

  describe("Test for checkSquare", () => {
    it("Should return true no double in square", () => {
      expect(sudoku.checkSquare(board, pos, "4")).toBe(true);
    });
  });
  describe("Test for checkRow", () => {
    it("Should return true no double in row", () => {
      console.log(board);
      expect(sudoku.checkRow(board, pos, "8")).toBe(false);
    });
  });
  describe("Test for checkColum", () => {
    it("Should return true no double in column", () => {
      expect(sudoku.checkColumn(board, pos, "1")).toBe(true);
    });
  });
});

describe('Тестирование функций findEmpty,createArrays,isSolved, solve', () => {
  const str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
  const str2 = '-4589267389317642527643581951924738676258319438496175295761423843872956162135894-';

  const arr = sudoku.createArrays(str2);
  test('createArrays', () => {
    expect(sudoku.createArrays(str)).toEqual([
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
  test('findEmpty должна вернуть массив позиций пустых элементов', () => {
    expect(sudoku.findEmpty(arr)).toEqual([
      [0, 0],
      [8, 8],
    ]);
  });
  test('isSolved', () => {
    expect(sudoku.isSolved(sudoku.solve(str))).toBeTruthy();
  });
  test('solve', () => {
    expect(sudoku.solve(str)).toEqual([
      ['1', '4', '5', '8', '9', '2', '6', '7', '3'],
      ['8', '9', '3', '1', '7', '6', '4', '2', '5'],
      ['2', '7', '6', '4', '3', '5', '8', '1', '9'],
      ['5', '1', '9', '2', '4', '7', '3', '8', '6'],
      ['7', '6', '2', '5', '8', '3', '1', '9', '4'],
      ['3', '8', '4', '9', '6', '1', '7', '5', '2'],
      ['9', '5', '7', '6', '1', '4', '2', '3', '8'],
      ['4', '3', '8', '7', '2', '9', '5', '6', '1'],
      ['6', '2', '1', '3', '5', '8', '9', '4', '7'],
    ]);
  });
});
