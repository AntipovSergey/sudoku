const sudoku = require("../sudoku.js");

describe("Test for checkSquare, checkRow, checkColum", () => {
  let board;
  let boardString;
  let pos;

  beforeEach(() => {
    boardString =
      "6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--";
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
