//is solved???

function isSolved(board) {
  let board = [
    [0, 5, 1, 3, 6, 2, 7, 0, 0],
    [0, 4, 0, 0, 5, 8, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 2, 5],
    [0, 8, 0, 0, 0, 0, 9, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 0, 5, 0, 0, 0, 0, 8, 0],
    [1, 2, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 2, 8, 0, 0, 6, 0],
    [0, 0, 8, 5, 3, 4, 2, 9, 0],
  ];

  describe("Is this sudoku solved?", function () {
    test("board", function () {
      expect(board(0, 0)).toEqual(0);
      expect(board(0, 0)).toEqual(0);
    });
  });

  describe("Is this sudoku solved?", function () {
    test("board", function () {
      expect(board(0, 0)).toEqual(0);
      expect(board(0, 0)).toEqual(0);
    });
  });
}
