
const sudoku = require("../sudoku.js");
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


//

describe("Общие тесты для фунции solve", () => {
const testSud = '--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--';

test('Возвращает не пустой массив', () => {
    expect(solve(testSud)).not.toEqual([]);
  });

  it('Недостаточная длина строки', () => {
    console.log = jest.fn();
    solve('321-3422-');
    // The first argument of the first call to the function was 'hello'
    expect(console.log.mock.calls[0][0]).toBe("Недостаточная длина строки");
  });


});

//

describe("Общие тесты для фунции isSolved", () => {
  const boardTwo = [
    ['1', '9', '9', '9', '-', '1', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '2', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '3', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '4', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '5', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '6', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '7', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '8', '-', '-', '-'],
    ['1', '9', '9', '9', '-', '9', '-', '-', '-'],
    ];

    describe('Проверяем isSolved()', () => {
        it('Return false', () => {
          expect(isSolved(boardTwo)).toBeFalsy();
        });
      });
    });




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
