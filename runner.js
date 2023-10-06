// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, isSolved, prettyBoard } = require("./sudoku");
const { getSector } = require("./getSector");


const puzzles = read("/puzzles.txt");

// solve(puzzles[0]);

console.log(getSector(puzzles[0], 56))