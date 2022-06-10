const sudoku = require('../sudoku.js');

describe('Проверка доски', () => {
  it('Доска - массив', () => {
    expect(Array.isArray(board())).toBe('true');
  });
});
