const fs = require('fs');
const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
// eslint-disable-next-line import/extensions
const sudoku = require('../sudoku.js');
const empty = require('../findEmpty');
const check = require('../index');
const checkSector = require('../elenaSolve3x3');
const fc = require('../sudoku');
const sudokuParse = require('../runner');


describe ('какие то тесты', () => {
  it('поиск пустой ячейки', () => {
    expect(empty([[1, 3, 5, 9, 4, 8, 2, 7, 0], [1, 3, 5, 9, 4, 8, 2, 7, 6]])).toEqual([0, 8]);
  });

  it('sudoku-14', () => {
    expect(fc(content, 14)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 3, 4, 5, 6], [2, 1, 4, 3, 6, 5, 8, 9, 7],
      [3, 6, 5, 8, 9, 7, 2, 1, 4], [8, 9, 7, 2, 1, 4, 3, 6, 5],
      [5, 3, 1, 6, 4, 2, 9, 7, 8], [6, 4, 2, 9, 7, 8, 5, 3, 1],
      [9, 7, 8, 5, 3, 1, 6, 4, 2]]);
  });
  it('Отсутствеие нулей в решении - sudoku-13', () => {
    expect(fc(content, 13).every((el) => el.includes(0) === false)).toEqual(true);
  });
});
