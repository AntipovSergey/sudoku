const sudoku = require('../sudoku.js')
const fs = require('fs')

describe(' Судоку ', () => {
  let rightSudoku;
  let line;
  let row;

  beforEach(() => {
    rightSudoku = getColumns();
    
  });

  describe(' Проверка строки ', () => {
    expect(rightSudoku[0].length === [...new Set(rightSudoku[0])].length).toBe(true);
  });

  describe(' Проверка столбцов', () => {

  })
})