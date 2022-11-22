const sudoku = require('../sudoku.js')

describe("Tests", function () {

  beforeEach(function () {
    board = [
  [1, 2, 3, 1, 2, 3, 1, 2, 3],
  [4, 5, 6, 4, 5, 6, 4, 5, 6],
  [7, 8, 9, 7, 8, 9, 7, 8, 9],
  [1, 2, 3, 1, 2, 3, 1, 2, 3],
  [4, 5, 6, 4, 5, 6, 4, 5, 6],
  [7, 8, 9, 7, 8, 9, 7, 8, 9],
  [1, 2, 3, 1, 2, 3, 1, 2, 3],
  [4, 5, 6, 4, 5, 6, 4, 5, 6],
  [7, 8, 9, 7, 8, 9, 7, 8, 9],
];

 arrBoard =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

  });

  describe("Тесты для функции makeBoard", function () {
    it("Функция возвращает массив", () => {
      expect(Array.isArray(sudoku.makeBoard(arrBoard))).toBe(true)
    });
    it("Функция не перезаписывает данные", () => {
        expect(sudoku.makeBoard(arrBoard)[0][0]).toBe(1)
        expect(sudoku.makeBoard(arrBoard)[0][2]).toBe(5)
        expect(sudoku.makeBoard(arrBoard)[0][3]).toBe(8)
      });
    it("Функция удаляет тире из строк", () => {
        expect((sudoku.makeBoard(arrBoard))[0][1]).not.toContain('-')
    });
    it("Функция заменяет тире нулями", () => {
        expect((sudoku.makeBoard(arrBoard))[0][1]).toBe(0)
    });
    it("Функция создает 9 массивов", () => {
        expect((sudoku.makeBoard(arrBoard)).length).toBe(9)
    });
});


  describe("Тесты для функции форматирования доски - prettyBoard ", function () {
    it("Функция возвращает массив", () => {
      expect(Array.isArray(sudoku.prettyBoard(board))).toBe(true)
    });
    it("Элементы массива это строки", () => {
        expect(typeof sudoku.prettyBoard(board)[1]).toBe('string')
      });  
    it("Функция возвращает строки содержащие форматирование", () => {
        expect(sudoku.prettyBoard(board)[0]).toContain('\n')
      });
    it("Возвращает заголовок", () => {
        expect(sudoku.prettyBoard(board)[0]).toContain('SUDOKU BOARD')
      });  
    it("Возвращает ошибку если передан не массив", () => {
        const error = () => sudoku.prettyBoard('notArray')
        expect(error).toThrowError('')
      });   
  });
});
