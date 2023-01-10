const sudoku = require("../sudoku.js");

describe("testing", () => {
  it("функция подставила все числа", () => {
    const board =
      "---------------------------------------------------------------------------------";
    expect(sudoku.solve(board).includes("-")).toBe(false);
  });
  it("в строке нет повторений", () => {
    const board =
      "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";
    function duplicates(array) {
      for (let r = 0; r < 9; r++) {
        for (let i = 1; i <= 9; i++) {
          if (array[r].indexOf(i) !== array[r].lastIndexOf(i)) {
            return true;
          }
          return false;
        }
      }
    }
    expect(duplicates(sudoku.solve(board))).toBe(false);
  });
});
