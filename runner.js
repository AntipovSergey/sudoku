// Используйте для решения судоку необходимые функции из файла sudoku.js

const {num, read} = require('./read');
const {solve} = require('./solve');
const { isSolved } = require('./issolved')

console.table(solve(read(num)))

console.log(solve());
console.log(isSolved());