
const fs = require('fs');
const wordsArr = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').trim()
const solveSudoku = require('./MySudoku.js');
const funGenSudoku = require('./funGenSudoku.js');

solveSudoku(funGenSudoku);
