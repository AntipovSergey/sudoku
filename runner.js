// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, isSolved, prettyBoard } = require("./sudoku");
const { possibleValues } = require("./possibleValues");
const { getRow } = require("./getRow");
const {getColumn} = require("./getColumn");
const {getSector} = require("./getSector");

const puzzles = read("/puzzles.txt");

let solution = [];

solution = possibleValues(puzzles[1]);
// console.log(solution);
console.log(prettyBoard(solution));

// console.log(prettyBoard(puzzles[0]));

// console.log(getColumn(puzzles[0],2));