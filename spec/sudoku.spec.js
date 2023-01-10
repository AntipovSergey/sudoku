const {
  getColumns,
  getSquares,
} = require('../sudoku.js')
const fs = require('fs')

describe('', () => {
  let lines;
  let columns;
  let squares;

  beforeEach(() => {
    columns = getColumns();
    squares = getSquares();
  });

  describe(' Проверка строки ', () => {
    expect(columns[0].length === [...new Set(columns[0])].length).toBe(true);
  });

  describe(' Проверка столбцов', () => {
    test('Если в квадрате нет повторящихся значений - "true" ', () => {
      expect(squares[0].length === [...new Set(squares[0])].length).toBe(true);
    });
    test('Если в линии нет повторяющихся значений - "true" ', () => {
      expect(lines[0].length === [...new Set(lines[0])].length).toBe(true);
    })
  });
})

