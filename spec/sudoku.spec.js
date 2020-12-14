const {
  validCol
} = require('../sudoku.js');



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

  describe("validCols", function () {
    it("should return the true if we can place number n in col_index else return false", function () {
      expect(validCol(board, 0, '1')).toEqual(false);
      expect(validCol(board, 0, '3')).toEqual(true);
      expect(validCol(board, 8, '2')).toEqual(true);
      expect(validCol(board, 7, '3')).toEqual(false);
    });
  });

