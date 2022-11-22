const sudoku = require('../sudoku.js')

describe("board", function () {

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
        expect(() => sudoku.prettyBoard('notArray')).toThrowError('')
      });   
  });
});
