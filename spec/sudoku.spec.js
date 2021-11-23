/* eslint-disable no-undef */
const fs = require('fs');

const content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
/*
const numbers = require('../sudoku');
const sudokuParse = require('../runner');
const empty = require('../empty'); */
const fc = require('../sudoku');

describe('tests', () => {
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
