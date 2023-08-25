// Используйте для решения судоку необходимые функции из файла sudoku.js
const {
  read, findFirstZero, checkRow, checkColomn, checkSquare, checkAll, solve, prettyBoard,
} = require('./sudoku.js');

console.log('номер искомого судоку');

let res = process.argv[2];
//if ((typeof(res) !== "Number") || (res < 0) || (res > 15)) return "неверное значение"
console.log(res);
const findArray = read(res);
console.log('Исходная судоку');

console.log(prettyBoard(findArray));
// сonsole.table(prettyBoard(findArray));
console.log(' ');

console.log('Решенная судоку');
console.log(' ');
solve(findArray);
console.log(prettyBoard(findArray));
// console.table(findArray);
