const sudoku = require('../sudoku.js');

describe('Тесты судоку', () => {

  test('Являются ли входные данные строкой', () => {
    expect(typeof(sudokuBaza)).toBe('string');
  });

  test ('Проверка таблицы 9 на 9', ()=>{
    expect(prettyBoard(board)).toBe(true);
  })

  test('Является ли конечный результат массивом', () => {
    expect(Array.isArray(solve(boardString))).toBe(true);
  });
});
