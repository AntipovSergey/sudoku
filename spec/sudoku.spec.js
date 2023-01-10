const sudoku = require('../sudoku.js');
const { solve, isSolved, prettyBoard, mainSolve } = require('../sudoku.js');
let arr;
     beforeEach(() => {
      str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
      arr = [
        [
          1, 4, 5,
          8, 9, 2,
          6, 7, 3
        ],
        [
          8, 9, 3,
          1, 7, 6,
          4, 2, 5
        ],
        [
          2, 7, 6,
          4, 3, 5,
          8, 1, 9
        ],
        [
          5, 1, 9,
          2, 4, 7,
          3, 8, 6
        ],
        [
          7, 6, 2,
          5, 8, 3,
          1, 9, 4
        ],
        [
          3, 8, 4,
          9, 6, 1,
          7, 5, 2
        ],
        [
          9, 5, 7,
          6, 1, 4,
          2, 3, 8
        ],
        [
          4, 3, 8,
          7, 2, 9,
          5, 6, 1
        ],
        [
          6, 2, 1,
          3, 5, 8,
          9, 4, 7
        ]
        ]
     });


describe('Проверка функции Solve', () => {
  test ('Проверка на числа.', () => {
    for(let i = 0; i < 9; i+=1) {
    expect(solve(str)[i]).not.toContain('-')
    }
  })
  test('Проверка на корректность результата.', () => {
       
       expect(solve(str)).toEqual([
          [
            1, 4, 5,
            8, 9, 2,
            6, 7, 3
          ],
          [
            8, 9, 3,
            1, 7, 6,
            4, 2, 5
          ],
          [
            2, 7, 6,
            4, 3, 5,
            8, 1, 9
          ],
          [
            5, 1, 9,
            2, 4, 7,
            3, 8, 6
          ],
          [
            7, 6, 2,
            5, 8, 3,
            1, 9, 4
          ],
          [
            3, 8, 4,
            9, 6, 1,
            7, 5, 2
          ],
          [
            9, 5, 7,
            6, 1, 4,
            2, 3, 8
          ],
          [
            4, 3, 8,
            7, 2, 9,
            5, 6, 1
          ],
          [
            6, 2, 1,
            3, 5, 8,
            9, 4, 7
          ]
        ]

        );
     });

  });

describe('Проверка функции isSolved', () => {
    
    test('Функция принимает массив?', () => {
      expect(Array.isArray(arr)).toBe(true);
    });
    test('Проверка на корректность результата.', () => {
      expect(isSolved(arr)).toEqual(true);
    });   
  });

  describe('Проверка функции prettyBoard', () => {

      test('Функция принимает массив?', () => {
      expect(Array.isArray(arr)).toBe(true);
    });
    test('Функция возвращает строку?', () => {
      expect(typeof prettyBoard(arr)).toEqual("string");
    });
    test('Проверка на Undefined', () => {
      expect(prettyBoard(arr)).not.toBeUndefined();
    });
    test('Проверка на возврат ошибки если массив не передан', () => {
      expect(() => sudoku.prettyBoard('notArray')).toThrowError('')
        const error = () => sudoku.prettyBoard('notArray')
        expect(error).toThrowError('')
    });
  });

  function makeBoard(boardString) {
    const str = boardString;
    const count = 9;
    const pattern = new RegExp('.{1,' + count + '}', 'ig');
    let res = str.match(pattern);
    let newArr = res.map((el) =>
      Array.from(el).map((element) =>
        element === '-' ? (element = 0) : Number(element)
      )
    );
    return newArr;
  }

  describe("Проверка функции makeBoard", function () {
    test("Замена '-' на '0'", () => {
        expect((makeBoard(str))[0][1]).not.toContain(0)
    });
    test("Проверка на корректное количество массивов на выходе", () => {
        expect((makeBoard(str)).length).toBe(9)
    });
});


