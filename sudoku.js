const fs = require('fs');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const read = fs.readFileSync('./puzzles.txt', 'utf-8');
const slice = read.slice(0, 81);
// function boardString() {
//   return read.slice(0, 82)
// }
function solve(boardString) {
  const table = [];
  const split = boardString.split('');
  for (let i = 9; i < split.length; i += 10) {
    split.splice(i, 0, ',');
  }
  return split.join('').split(',').map((x) => x.split(''))

  // for (let i = 0; i < boardString.length; i++) {
  //   const row = [];
  //   for (let j = 0; j < 9; j+=10) {
  //     row.push(boardString[j]);
  //   }
  //   table.push(row);
  //   boardString.slice()
  // }
  // return table
}
console.table(solve(slice));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
