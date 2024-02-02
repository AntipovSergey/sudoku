// Используйте для решения судоку необходимые функции из файла sudoku.js

// const {read} = require('./read');
const {solve} = require('./solve');
const {isSolved} = require('./issolved');

// const num = process.argv[2] - 1;

console.log(solve());
console.log(isSolved());