const { solve, isSolved, prettyBoard } = require("../sudoku.js");

describe("Общие тесты для фунции prettyBoard", () => {
  let board;
  beforeEach(() => {
    board = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
    ];
  });
  test("prettyBoard возвращает строку", () => {
    expect(typeof prettyBoard(board)).toEqual("string");
  });
  test("prettyBoard возвращает соответствующие emojis", () => {
    const expected = "➊ ➋ ➌ \n➍ ➎ ➏ \n➐ ➑ ➒ ";
    expect(prettyBoard(board)).toEqual(expected);
  });
});


it('Недостаточная длина строки', () => {
  console.log = jest.fn();
  solve('321-3422-');
  // The first argument of the first call to the function was 'hello'
  expect(console.log.mock.calls[0][0]).toBe("Недостаточная длина строки");
});
