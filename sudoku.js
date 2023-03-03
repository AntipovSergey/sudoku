/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
//  */
const fs = require('fs');
const string = fs.readFileSync('./puzzles.txt', 'utf8');

function solve() {
  const arr = string.split('\n');
  const arr2 = arr[0]
    .split('')
    .map((el) => (el !== '-' ? Number(el) : Math.floor(Math.random() * 9 + 1)));
  const res = [];
  for (let i = 0; i < arr2.length; i += 9) {
    const chunk = arr2.slice(i, i + 9);
    res.push(chunk);
  }
  return res;
}

console.table(solve());

// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает булевое значение — решено это игровое поле или нет.
//  */
function isSolved(board = '-') {
  const arrayIsArr = solve();
  for (let i = 0; i < arrayIsArr.length; i++) {
    for (let j = 0; j < arrayIsArr.length; j++) {
      if (arrayIsArr[i][j] === board) {
        return 'решай сам';
      }
    }
  }
}
console.log(isSolved(3));
// /**
//  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//  * Возвращает строку с игровым полем для последующего вывода в консоль.
//  * Подумай, как симпатичнее сформировать эту строку.
//  */
// function prettyBoard(board) {}

// // Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  // prettyBoard,
};
