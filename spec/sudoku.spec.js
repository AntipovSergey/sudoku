const sudoku = require('../sudoku.js')
const readAndSolve = require('../runner');

describe('test1', () => {
  fs.readFile(
    '../sudoku-puzzles.txt',
    'utf-8',
    readAndSolve
  );
  
});
