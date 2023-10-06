// Используйте для решения судоку необходимые функции из файла sudoku.js
const {
  read, solve, isSolved, prettyBoard,
} = require('./sudoku');

const puzzles = read('/puzzles.txt');
