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

describe("Общие тесты для фунций solve и isSolved", () => {
  let string;
  beforeEach(() => {'321-3422-'});
  test("prettyBoard возвращает строку", () => {
    expect(typeof prettyBoard(board)).toEqual("string");
  });
  test("prettyBoard возвращает соответствующие emojis", () => {
    const expected = "➊ ➋ ➌ \n➍ ➎ ➏ \n➐ ➑ ➒ ";
    expect(prettyBoard(board)).toEqual(expected);
  });
});
