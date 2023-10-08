// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, isSolved, prettyBoard } = require("./sudoku");
const { possibleValues } = require("./possibleValues");
const { getRow } = require("./getRow");
const {getColumn} = require("./getColumn");
const {getSector} = require("./getSector");

const puzzles = read("/puzzles.txt");

let ind = 6;
if (process.argv[2] != undefined) ind = process.argv[2];


solve(puzzles[ind]);
