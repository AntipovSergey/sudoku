/* eslint-disable no-undef */
const sudoku = require('../sudoku.js')

describe('Тестирование функций судоку', () => {
  test('Чтение доски из строки', () => {
    expect(sudoku.parseBoard('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')).toEqual([
      [1, null, 5, 8, null, 2, null, null, null],
      [null, 9, null, null, 7, 6, 4, null, 5],
      [2, null, null, 4, null, null, 8, 1, 9],
      [null, 1, 9, null, null, 7, 3, null, 6],
      [7, 6, 2, null, 8, 3, null, 9, null],
      [null, null, null, null, 6, 1, null, 5, null],
      [null, null, 7, 6, null, null, null, 3, null],
      [4, 3, null, null, 2, null, 5, null, 1],
      [6, null, null, 3, null, 8, 9, null, null],
    ]);
  });
});
